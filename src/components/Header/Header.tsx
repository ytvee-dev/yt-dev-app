import React from 'react';
import Link from 'next/link';
import {useThemeStore} from '@/store/themeStore';
import {useLanguageStore} from '@/store/languageStore';
import {Container} from '@/components/UI/Container';
import {Icon} from '@/components/UI/Icon';
import {Modal} from "@/components/UI/Modal";
import contentData from '@/data/content.json';
import {
    themeOptionsRu,
    themeOptionsKz,
    themeOptionsEn,
    languageOptions,
    navigationOptionsRu,
    navigationOptionsEn,
    navigationOptionsKz
} from "@/components/UI/Modal/meta";
import styles from './Header.module.scss';


export const Header: React.FC = () => {
    const {setTheme, theme} = useThemeStore();
    const {language, setLanguage} = useLanguageStore();

    const logoColor = theme === 'light' ? '#212121' : '#F5F0E6';
    const [isThemeModalOpened, setIsThemeModalOpened] = React.useState(false);
    const [isLanguageModalOpened, setIsLanguageModalOpened] = React.useState(false);
    const [isNavigationModalOpened, setIsNavigationModalOpened] = React.useState(false);

    const themeOptions = language === 'ru' ? themeOptionsRu : language === 'kz' ? themeOptionsKz : themeOptionsEn;
    const navigationOptions = language === 'ru' ? navigationOptionsRu : language === 'kz' ? navigationOptionsKz : navigationOptionsEn;

    const content = contentData[language as keyof typeof contentData];

    const handleThemeSelect = (themeId: string) => {
        if (themeId === 'light' || themeId === 'dark') {
            setTheme(themeId);
            setIsThemeModalOpened(false);
        }
    };

    const handleLanguageSelect = (languageId: string) => {
        if (languageId === 'ru' || languageId === 'en' || languageId === 'kz') {
            setLanguage(languageId);
            setIsLanguageModalOpened(false);
        }
    };

    const handleThemeModalToggle = () => {
        setIsThemeModalOpened(!isThemeModalOpened);
        if (!isThemeModalOpened) {
            setIsLanguageModalOpened(false);
            setIsNavigationModalOpened(false);
        }
    };

    const handleLanguageModalToggle = () => {
        setIsLanguageModalOpened(!isLanguageModalOpened);
        if (!isLanguageModalOpened) {
            setIsThemeModalOpened(false);
            setIsNavigationModalOpened(false);
        }
    };

    const handleNavigationSelect = (navigationId: string) => {
        if (navigationId === 'home' || navigationId === 'services') {
            setIsNavigationModalOpened(false);
        }
    };

    const handleNavigationModalToggle = () => {
        setIsNavigationModalOpened(!isNavigationModalOpened);
        if (!isNavigationModalOpened) {
            setIsThemeModalOpened(false);
            setIsLanguageModalOpened(false);
        }
    };

    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <Icon name='logo' size={32} color={logoColor}/>
                    <span className={styles.brandText} style={{color: logoColor}}>DEV</span>
                </Link>

                <nav className={styles.navigation}>
                    <Link href="/" className={styles.navLink}>
                        <span className={styles.hashtag}>#</span>
                        {content.navigation.home}
                    </Link>
                    <Link href="/services" className={styles.navLink}>
                        <span className={styles.hashtag}>#</span>
                        {content.navigation.services}
                    </Link>
                </nav>

                <div className={styles.controls}>
                    <div className={styles.mobileNavigation}>
                        <button
                            onClick={handleNavigationModalToggle}
                            className={styles.controlButton}
                            aria-label="Navigation"
                        >
                            <Icon name={'nav'} color={logoColor} size={22}/>
                        </button>

                        <Modal
                            isOpen={isNavigationModalOpened}
                            onClose={() => setIsNavigationModalOpened(false)}
                            options={navigationOptions}
                            onSelect={handleNavigationSelect}
                        />
                    </div>

                    <div className={styles.controlItem}>
                        <button
                            onClick={handleThemeModalToggle}
                            className={styles.controlButton}
                            aria-label="Theme"
                        >
                            <Icon name={'theme'} color={logoColor} size={22}/>
                        </button>

                        <Modal
                            isOpen={isThemeModalOpened}
                            onClose={() => setIsThemeModalOpened(false)}
                            options={themeOptions}
                            onSelect={handleThemeSelect}
                            selectedId={theme}
                        />
                    </div>

                    <div className={styles.controlItem}>
                        <button
                            onClick={handleLanguageModalToggle}
                            className={styles.controlButton}
                            aria-label="Language"
                        >
                            <Icon
                                name={'language'}
                                color={logoColor}
                                size={22}
                            />
                        </button>

                        <Modal
                            isOpen={isLanguageModalOpened}
                            onClose={() => setIsLanguageModalOpened(false)}
                            options={languageOptions}
                            onSelect={handleLanguageSelect}
                            selectedId={language}
                        />
                    </div>
                </div>
            </Container>
        </header>
    );
};
