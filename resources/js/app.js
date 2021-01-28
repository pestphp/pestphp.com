import 'alpinejs';
import { listen } from "quicklink";
import docsearch from '@docsearch/js';

import './clipboard';
import './nav';
import './darkmode';

// Configure DocSearch
docsearch({
	container: '#docsearch',
	apiKey: 'd25b0b281fd72e7b8ce770857fff45bf',
	indexName: 'pestphp',
});

window.addEventListener('load', () => {
	listen();
});
