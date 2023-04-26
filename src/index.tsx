import { use } from 'i18next';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { initReactI18next } from 'react-i18next';

import App from './App';
import en from './locales/en/translation.json';
import pl from './locales/pl/translation.json';

use(initReactI18next)
	.init({
		resources: {
			en: { translation: en },
			pl: { translation: pl },
		},
		lng: 'pl',
		fallbackLng: 'pl',
		interpolation: {
			escapeValue: false,
		},
	})
	.then(() => {
		return;
	})
	.catch((e) => {
		console.log(e);
	});

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
