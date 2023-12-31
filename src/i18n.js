import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.use(Backend)
	.init({
		debug: true,
		supportedLngs: ['en', 'it','fr','ar','ru','jp'],
		fallbackLng: 'en',
		detection: {
			order: ['cookie', 'htmlTag', 'path', 'localStorage', 'subdomain'],
			caches: ['cookie'],
		},
		react: {
			wait: true,
		},
	});

export default i18n;
