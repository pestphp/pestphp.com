// Right-click context menu for the Pest logo — copy the mark or wordmark as
// SVG, or jump to the brand guidelines. Mirrors the menu on the landing page.

const LOGOMARK_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 228 204" role="img" aria-label="Pest logomark"><title>Pest logomark</title><path fill="#ffffff" d="M227.1,57.9C232.7,26,211.4,0,179.6,0H35.8L25.6,57.9h143.9l-3.4,19.3H22.2L0,204h57.6l12.1-69H156c31.8,0,62.1-26,67.7-57.9L227.1,57.9z"/></svg>';

const WORDMARK_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 381 100" role="img" aria-label="PEST"><title>Pest wordmark</title><path fill="#ffffff" fill-rule="evenodd" clip-rule="evenodd" d="M16.607 27.51 22.994 0h85.181L93.484 63.272H36.697l-8.303 35.763H0l14.69-63.272h56.788l1.916-8.253zM295.574 0h85.181l-6.387 27.51h-39.752L318.01 99.035h-28.394l16.607-71.525h-73.824l-1.917 8.253h56.788l-6.387 27.51-1.916 8.252-6.387 27.51h-85.181l6.387-27.51h56.787l1.916-8.253h-56.787l6.387-27.51 1.916-8.252L210.392 0zm-93.7 0h-85.181l-6.387 27.51h85.181zm-25.34 35.763h-68.145l-6.387 27.51h68.145zm8.734 35.762h-85.182l-6.387 27.51h85.181z"/></svg>';

export default () => ({
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
});
