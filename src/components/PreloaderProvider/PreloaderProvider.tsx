'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { usePreloader } from '@/hooks/usePreloader';
import { Loader } from '@/components/UI/Loader';

interface PreloaderContextType {
  isLoading: boolean;
  progress: number;
}

const PreloaderContext = createContext<PreloaderContextType | undefined>(undefined);

interface PreloaderProviderProps {
  children: ReactNode;
  images?: string[];
  fonts?: string[];
  minLoadTime?: number;
}

export const PreloaderProvider: React.FC<PreloaderProviderProps> = ({
  children,
  images = [],
  fonts = [],
  minLoadTime = 1000,
}) => {
  const { isLoading, progress } = usePreloader({
    images,
    fonts,
    minLoadTime,
  });

  return (
    <PreloaderContext.Provider value={{ isLoading, progress }}>
      {isLoading && <Loader text="Loading..." />}
      <div 
        style={{ 
          opacity: isLoading ? 0 : 1,
          pointerEvents: isLoading ? 'none' : 'auto'
        }}
      >
        {children}
      </div>
    </PreloaderContext.Provider>
  );
};

export const usePreloaderContext = () => {
  const context = useContext(PreloaderContext);
  if (context === undefined) {
    throw new Error('usePreloaderContext must be used within a PreloaderProvider');
  }
  return context;
};
