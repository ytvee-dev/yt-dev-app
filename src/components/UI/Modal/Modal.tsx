'use client';

import React, {useEffect, useRef} from 'react';
import Link from 'next/link';
import styles from './Modal.module.scss';
import {ModalProps} from "@/types/modal";
import {Icon} from "@/components/UI/Icon";

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    options,
    onSelect,
    selectedId,
}) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const getIconColor = (itemId: string, iconName?: string) => {
        if (!iconName || itemId !== selectedId) {
            return 'var(--color-text-primary)';
        }

        if (iconName === 'sun' && itemId === 'light') {
            return 'var(--color-accent-1-primary)';
        }

        if (iconName === 'moon' && itemId === 'dark') {
            return '#89c3e7';
        }

        return 'var(--color-text-primary)';
    };

    const handleItemClick = (itemId: string) => {
        onSelect(itemId);
    };

    const isNavigationItem = (itemId: string) => {
        return itemId === 'home' || itemId === 'services';
    };

    const getNavigationHref = (itemId: string) => {
        if (itemId === 'home') return '/';
        if (itemId === 'services') return '/services';
        return '#';
    };

    return (
        <div
            ref={modalRef}
            className={`${styles.modalWrapper} ${isOpen ? styles.open : ''}`}
        >
            {options.map((item) => {
                const isNavItem = isNavigationItem(item.id);
                const content = (
                    <>
                        {item.iconName && (
                            <Icon
                                name={item.iconName}
                                size={22}
                                color={getIconColor(item.id, item.iconName)}
                            />
                        )}
                        {item.startText && (
                            <span className={styles.startText}>{item.startText}</span>
                        )}
                        <span
                            className={styles.label}
                            style={{color: getIconColor(item.id, item.iconName)}}
                        >{item.label}</span>
                    </>
                );

                if (isNavItem) {
                    return (
                        <Link
                            key={item.id}
                            href={getNavigationHref(item.id)}
                            className={`${styles.modalItem} ${item.id === selectedId ? styles.active : ''}`}
                            onClick={() => handleItemClick(item.id)}
                            aria-label={item.label}
                        >
                            {content}
                        </Link>
                    );
                }

                return (
                    <button
                        key={item.id}
                        className={`${styles.modalItem} ${item.id === selectedId ? styles.active : ''}`}
                        onClick={() => handleItemClick(item.id)}
                        aria-label={item.label}
                    >
                        {content}
                    </button>
                );
            })}
        </div>
    );
};
