window.docsearch = require('docsearch.js');
window.hljs = require('highlight.js');
import { listen, prefetch } from "quicklink";

import './clipboard';

hljs.configure({
  classPrefix: 'hljs-'
});

document.querySelectorAll('pre code').forEach((block) => {
	hljs.initHighlightingOnLoad();
});

window.addEventListener('load', () => {
	listen();
});