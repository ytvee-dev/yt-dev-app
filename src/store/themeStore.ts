import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import {Theme, ThemeState} from '@/types/theme';

export const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            theme: 'light',
            setTheme: (theme: Theme) => set({theme}),
            toggleTheme: () => set((state) => ({
                theme: state.theme === 'light' ? 'dark' : 'light'
            })),
        }),
        {
            name: 'theme-storage',
        }
    )
);
