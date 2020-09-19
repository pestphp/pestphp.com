window.hljs = require('highlight.js');
import 'alpinejs';
import { listen } from "quicklink";
import docsearch from '@docsearch/js';

import './clipboard';
import './nav';

hljs.configure({
	classPrefix: 'hljs-'
});

docsearch({
	container: '#docsearch',
	apiKey: 'd25b0b281fd72e7b8ce770857fff45bf',
	indexName: 'pestphp',
});

document.querySelectorAll('pre code').forEach((block) => {
	hljs.initHighlightingOnLoad();
});

window.addEventListener('load', () => {
	listen();
});