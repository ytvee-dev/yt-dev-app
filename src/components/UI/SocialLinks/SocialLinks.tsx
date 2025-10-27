import React from 'react';
import {useLanguageStore} from "@/store/languageStore";
import {Icon} from "@/components/UI/Icon";
import contentData from "@/data/content.json";
import styles from './SocialLinks.module.scss';

export const SocialLinks: React.FC = () => {
    const {language} = useLanguageStore();
    const content = contentData[language as keyof typeof contentData];

    return (
        <div className={styles.socialIcons}>
            <a href={content.footer.socialNetworks.links.github} className={styles.socialIcon}
               aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <Icon name='github' size={24}/>
            </a>
            <a href={content.footer.socialNetworks.links.linkedin} className={styles.socialIcon}
               aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Icon name='linkedin' size={24}/>
            </a>
            <a href={content.footer.socialNetworks.links.instagram} className={styles.socialIcon}
               aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Icon name='insta' size={24}/>
            </a>
        </div>
    );
};
