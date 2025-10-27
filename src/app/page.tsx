'use client';

import React from 'react';
import {Layout} from '@/components/Layout/Layout';
import {useLanguageStore} from '@/store/languageStore';
import {useThemeStore} from "@/store/themeStore";
import {Container} from '@/components/UI/Container';
import {getImagesForPage} from '@/data/images';
import {SocialLinks} from "@/components/UI/SocialLinks";
import {Icon, IconName} from "@/components/UI/Icon";
import {PartnersIcons} from "@/types/icon";
import contentData from '@/data/content.json';
import styles from './page.module.scss';

export interface Partners {
    name: PartnersIcons,
    link: string,
}

const partners: Partners[] = [
    {name: 'pikabu', link: 'https://pikabu.ru'},
    {name: 'xray', link: 'https://xraystand.com'},
    {name: 'start', link: 'https://startstudio.kz'},
    {name: 'jg', link: 'https://www.jamgalaxy.com'},
    {name: 'singularity', link: 'https://singularitynet.io'},
    {name: 'friends', link: 'https://www.instagram.com/community__friends'},
    {name: 'avia', link: 'https://www.aviasales.ru/'},
    {name: 'synth', link: 'https://www.aisynthesizer.com'},
];

export default function HomePage() {
    const {language} = useLanguageStore();
    const {theme} = useThemeStore();
    const content = contentData[language as keyof typeof contentData];
    const profileImage = theme === 'dark' ? 'meReal' : 'meGraph';

    return (
        <Layout images={getImagesForPage('home')}>
            <Container className={styles.container}>
                <section className={styles.hero}>
                    <div className={styles.descriptionWrapper}>
                        <p className={styles.heroDescription}>
                            {content.pages.home.description}
                        </p>
                    </div>
                    <div className={styles.profileWrapper}>
                        <img src={`images/${profileImage}.png`} alt="profile"/>

                        <div className={styles.resumeWrapper}>
                            <div className={styles.decoration}></div>
                            <p className={styles.text}>
                                {content.pages.home.resumeCTA.main}
                                <a
                                    href={content.pages.home.resumeCTA.link}
                                    target='_blank'
                                >{content.pages.home.resumeCTA.linkText}</a>
                            </p>
                        </div>

                        <div className={styles.socialLinksWrapper}><SocialLinks /></div>
                    </div>
                </section>

                <section className={styles.partners}>
                    <p className={styles.partnersTitle}>
                        {content.pages.home.partners}
                    </p>
                    <div className={styles.partnersWrapper}>
                        <div className={styles.partnersTrack}>
                            {[...Array(6)].map((_, setIndex) => (
                                partners.map((partner, index) => (
                                    <a
                                        key={`${partner}-${setIndex}-${index}`}
                                        href={partner.link}
                                        target="_blank"
                                    >
                                        <Icon name={partner.name} size={50} />
                                    </a>
                                ))
                            ))}
                        </div>
                    </div>
                </section>
            </Container>
        </Layout>
    );
}