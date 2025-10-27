export const suppressDevelopmentWarnings = () => {
  if (process.env.NODE_ENV === 'development') {
    const originalConsoleWarn = console.warn;
    console.warn = (...args) => {
      const message = args[0];
      if (typeof message === 'string' && message.includes('Download the React DevTools')) {
        return;
      }
      originalConsoleWarn.apply(console, args);
    };
  }
};
