import React from 'react';
import {IconProps} from '@/types/icon';
import styles from './Icon.module.scss';

export const Icon: React.FC<IconProps> = ({
    name,
    size,
    color = 'currentColor',
    className = '',
    width,
    height,
}) => {
    const iconSize = `${size}px`;
    const iconWidth = width ? (typeof width === 'number' ? `${width}px` : width) : iconSize;
    const iconHeight = height ? (typeof height === 'number' ? `${height}px` : height) : iconSize;

    return (
        <svg
            className={`${styles.icon} ${className}`}
            width={iconWidth && iconWidth}
            height={iconHeight && iconHeight}
            style={{color}}
            aria-hidden="true"
        >
            <use href={`/sprite.svg#${name}`} xlinkHref={`/sprite.svg#${name}`}/>
        </svg>
    );
};
