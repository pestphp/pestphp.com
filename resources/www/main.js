import './main.css'

import Alpine from 'alpinejs'
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'

// Right-click brand menu on the Pest logo — copy the mark or wordmark as SVG,
// or open the brand guidelines. Mirrors the docs menu (resources/js/brand.js).
const LOGOMARK_SVG = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 240 220" role="img" aria-label="Pest logomark"><title>Pest logomark</title><path fill="#ffffff" fill-rule="evenodd" clip-rule="evenodd" d="M36.844 61.111 51.014 0H240l-32.594 140.556H81.417L62.995 220H0L32.593 79.445h125.989l4.252-18.334z"/></svg>';
const WORDMARK_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 381 100" role="img" aria-label="PEST"><title>Pest wordmark</title><path fill="#ffffff" fill-rule="evenodd" clip-rule="evenodd" d="M16.607 27.51 22.994 0h85.181L93.484 63.272H36.697l-8.303 35.763H0l14.69-63.272h56.788l1.916-8.253zM295.574 0h85.181l-6.387 27.51h-39.752L318.01 99.035h-28.394l16.607-71.525h-73.824l-1.917 8.253h56.788l-6.387 27.51-1.916 8.252-6.387 27.51h-85.181l6.387-27.51h56.787l1.916-8.253h-56.787l6.387-27.51 1.916-8.252L210.392 0zm-93.7 0h-85.181l-6.387 27.51h85.181zm-25.34 35.763h-68.145l-6.387 27.51h68.145zm8.734 35.762h-85.182l-6.387 27.51h85.181z"/></svg>';

document.addEventListener('alpine:init', () => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: light)');
    let storedTheme = 'dark';

    try {
        storedTheme = ['dark', 'light', 'system'].includes(localStorage.theme) ? localStorage.theme : 'dark';
    } catch (e) {}

    Alpine.store('theme', {
        mode: storedTheme,
        light: storedTheme === 'light' || (storedTheme === 'system' && systemTheme.matches),
        get nextMode() {
            return { dark: 'light', light: 'system', system: 'dark' }[this.mode];
        },
        init() {
            systemTheme.addEventListener('change', () => {
                if (this.mode === 'system') this.apply();
            });
            this.apply();
        },
        apply() {
            this.light = this.mode === 'light' || (this.mode === 'system' && systemTheme.matches);
            document.documentElement.classList.toggle('light', this.light);
            document.querySelector('meta[name="theme-color"]').content = this.light ? '#ffffff' : '#18181b';
        },
        setMode(mode) {
            this.mode = ['dark', 'light', 'system'].includes(mode) ? mode : 'dark';

            try { localStorage.theme = this.mode; } catch (e) {}

            this.apply();
        },
        toggle() {
            this.setMode(this.nextMode);
        },
    });

    Alpine.directive('tooltip', (el, { expression }) => {
        tippy(el, {
            content: expression,
            theme: 'pest',
            placement: 'top',
            delay: [80, 0],
            maxWidth: 240,
        });
    });

    Alpine.data('pestLogoMenu', () => ({
        open: false,
        x: 0,
        y: 0,
        logomark: LOGOMARK_SVG,
        wordmark: WORDMARK_SVG,
        openMenu(event) {
            const menuWidth = 236;
            const menuHeight = 152;
            this.x = Math.min(event.clientX, window.innerWidth - menuWidth - 8);
            this.y = Math.min(event.clientY, window.innerHeight - menuHeight - 8);
            this.open = true;
        },
        copy(which) {
            navigator.clipboard.writeText(this[which]).catch(() => {});
            this.open = false;
        },
    }));
});

// Remember the scroll position across refreshes: the inline <head> script adds
// `no-intro` on <html> when the page reloads scrolled past the hero, so the
// enter animations (header, rails, grid, intro) only play at the top.
try { sessionStorage.removeItem('pest-scroll') } catch (e) {}
addEventListener('pagehide', () => {
    try { sessionStorage.setItem('pest-scroll', scrollY) } catch (e) {}
})

window.Alpine = Alpine
Alpine.start()
