import { useState, useEffect } from 'react';

interface PreloadOptions {
  images?: string[];
  fonts?: string[];
  minLoadTime?: number;
}

export const usePreloader = (options: PreloadOptions = {}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const { images = [], fonts = [], minLoadTime = 1000 } = options;

  useEffect(() => {
    let loadedCount = 0;
    const totalResources = images.length + fonts.length;
    const startTime = Date.now();

    if (totalResources === 0) {
      setTimeout(() => {
        setIsLoading(false);
      }, minLoadTime);
      return;
    }

    const updateProgress = () => {
      loadedCount++;
      const newProgress = Math.round((loadedCount / totalResources) * 100);
      setProgress(newProgress);

      if (loadedCount === totalResources) {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minLoadTime - elapsedTime);
        
        setTimeout(() => {
          setIsLoading(false);
        }, remainingTime);
      }
    };

    images.forEach((src) => {
      const img = new Image();
      img.onload = updateProgress;
      img.onerror = updateProgress; // Считаем ошибку как загруженный ресурс
      img.src = src;
    });

    fonts.forEach((fontFamily) => {
      if (document.fonts) {
        document.fonts.load(`16px ${fontFamily}`).then(() => {
          updateProgress();
        }).catch(() => {
          updateProgress();
        });
      } else {
        updateProgress();
      }
    });

    return () => {
      setIsLoading(false);
    };
  }, [images, fonts, minLoadTime]);

  return { isLoading, progress };
};
