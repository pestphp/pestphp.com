import Alpine from 'alpinejs'
import docsearch from '@docsearch/js';
import tippy from 'tippy.js'

window.Alpine = Alpine

import './clipboard';
import Nav from './nav';
import DarkMode from './darkmode';
import LogoMenu from './brand';

Alpine.data('offcanvasNav', Nav)
Alpine.data('ToggleDark', DarkMode);
Alpine.data('pestLogoMenu', LogoMenu);

document.addEventListener('alpine:init', () => {
    Alpine.directive('tooltip', (el, { expression }) => {
        tippy(el, { content: expression });
    });
});

// Configure DocSearch
docsearch({
    container: '#docsearch',
    appId: '1JFXODBVDH',
    apiKey: 'dd63fbb022012f3144613ee088b8645b',
    indexName: 'pestphp',
});

Alpine.start()
