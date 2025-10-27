'use client';

import React from 'react';
import {useLanguageStore} from '@/store/languageStore';
import {Container} from '@/components/UI/Container';
import {Icon} from "@/components/UI/Icon";
import {SocialLinks} from "@/components/UI/SocialLinks";
import contentData from '@/data/content.json';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
    const {language} = useLanguageStore();
    const content = contentData[language as keyof typeof contentData];

    return (
        <footer className={styles.footer}>
            <Container className={styles.container}>
                <div className={styles.leftSection}>
                    <div className={styles.logo}>
                        <Icon name='logo' size={24}/>
                        <span className={styles.brandText}>DEV</span>
                    </div>
                    <p className={styles.description}>
                        {content.footer.description}
                    </p>
                </div>

                <div className={styles.centerSection}>
                    <a href={`mailto:${content.footer.email}`} className={styles.email}>
                        {content.footer.email}
                    </a>
                    <p>{content.footer.copyright}</p>
                </div>

                <div className={styles.rightSection}>
                    <h3 className={styles.socialTitle}>
                        {content.footer.socialNetworks.title}
                    </h3>
                    <SocialLinks />
                </div>
            </Container>
        </footer>
    );
};
