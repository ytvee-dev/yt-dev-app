export type PartnersIcons =
    | 'pikabu'
    | 'xray'
    | 'start'
    | 'jg'
    | 'singularity'
    | 'friends'
    | 'avia'
    | 'synth';

export type IconName =
    'home'
    | 'logo'
    | 'moon'
    | 'sun'
    | 'theme'
    | 'language'
    | 'nav';

export type SocialIcons =
    'github'
    | 'linkedin'
    | 'insta';

export interface IconProps {
    name: IconName | PartnersIcons | SocialIcons;
    size?: number;
    color?: string;
    className?: string;
    width?: number | string;
    height?: number | string;
}
