import React from 'react';
import styles from './Loader.module.scss';

interface LoaderProps {
  text?: string;
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({ 
  text = 'Loading...', 
  className = '' 
}) => {
  return (
    <div 
      className={`${styles.loader} ${className}`}
      data-nextjs-scroll-focus-boundary
    >
      <div className={styles.spinner}></div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
