'use client';

import React, { useEffect } from 'react';
import { useThemeStore } from '@/store/themeStore';
import { PreloaderProvider } from '@/components/PreloaderProvider';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import styles from './Layout.module.scss';
import {useRouter} from "next/router";
import {usePathname} from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
  images?: string[];
  fonts?: string[];
  minLoadTime?: number;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  images = [], 
  fonts = ['Fira Sans', 'Fira Code'],
  minLoadTime = 1000 
}) => {
  const { theme } = useThemeStore();
  const route = usePathname();
  console.log(route)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <PreloaderProvider images={images} fonts={fonts} minLoadTime={minLoadTime}>
      <div className={styles.layout}>
        <Header />
        <main className={styles.main}>
          {children}
        </main>
        {route === '/services' && <Footer />}
      </div>
    </PreloaderProvider>
  );
};
