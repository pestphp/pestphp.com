import './main.css'

import Alpine from 'alpinejs'
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'

document.addEventListener('alpine:init', () => {
    Alpine.directive('tooltip', (el, { expression }) => {
        tippy(el, {
            content: expression,
            theme: 'pest',
            placement: 'top',
            delay: [80, 0],
            maxWidth: 240,
        });
    });
});

window.Alpine = Alpine
Alpine.start()
