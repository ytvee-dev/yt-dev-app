'use client';

import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/Layout/Layout';
import { Container } from '@/components/UI/Container';
import { useLanguageStore } from '@/store/languageStore';
import { getImagesForPage } from '@/data/images';
import styles from './page.module.scss';

export default function Page() {
  const { language } = useLanguageStore();

  const content = {
    ru: {
      title: 'страница не найдена',
      description: 'извините, запрашиваемая страница не существует.',
      backHome: 'вернуться на главную'
    },
    en: {
      title: 'page not found',
      description: 'sorry, the requested page does not exist.',
      backHome: 'back to home'
    },
    kz: {
      title: 'бет табылмады',
      description: 'кешіріңіз, сұралған бет жоқ.',
      backHome: 'басты бетке оралу'
    }
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <Layout images={getImagesForPage('notFound')}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>404</h1>
          <h2 className={styles.subtitle}>{currentContent.title}</h2>
          <p className={styles.description}>
            {currentContent.description}
          </p>
          <Link href="/public" className={styles.backButton}>
            {currentContent.backHome}
          </Link>
        </div>
      </Container>
    </Layout>
  );
}
