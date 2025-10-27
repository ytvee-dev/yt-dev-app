export const preloadImages = {
  common: [
    '/sprite.svg',
  ],
  
  home: [
    '/images/meReal.png',
    '/images/meGraph.png',
  ],
  
  services: [
    '/sprite.svg',
  ],
  
  notFound: [
    '/sprite.svg',
  ],
};

export const getImagesForPage = (page: keyof typeof preloadImages): string[] => {
  return [
    ...preloadImages.common,
    ...preloadImages[page],
  ];
};
