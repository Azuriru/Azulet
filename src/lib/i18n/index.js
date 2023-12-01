import i18n from 'sveltekit-i18n';
import { dev } from '$app/environment';
import lang from './lang.json';

export const defaultLocale = 'en';

/** @type {import('sveltekit-i18n').Config} */
export const config = {
    log: {
        level: dev ? 'warn' : 'error',
    },
    translations: {
        en: { lang },
        cs: { lang },
    },
    loaders: [
        {
            locale: 'en',
            key: 'nav',
            loader: async () => (await import('./en/Navigation.json')).default,
        }
    ],
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);