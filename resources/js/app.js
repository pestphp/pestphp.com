import Alpine from 'alpinejs'
import { listen } from "quicklink";
import docsearch from '@docsearch/js';

window.Alpine = Alpine

import './clipboard';
import Nav from './nav';
import DarkMode from './darkmode';

Alpine.data('offcanvasNav', Nav)
Alpine.data('ToggleDark', DarkMode);

// Configure DocSearch
docsearch({
	container: '#docsearch',
	apiKey: 'd25b0b281fd72e7b8ce770857fff45bf',
	indexName: 'pestphp',
});

window.addEventListener('load', () => {
	listen();
});

Alpine.start()
