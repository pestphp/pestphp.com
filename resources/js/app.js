import Alpine from 'alpinejs'
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
    appId: '1JFXODBVDH',
    apiKey: 'dd63fbb022012f3144613ee088b8645b',
    indexName: 'pestphp',
});

Alpine.start()
