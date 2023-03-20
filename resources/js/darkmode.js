export default () => ({
    mode: localStorage.theme,
    init() {
        if (!('theme' in localStorage)) {
            localStorage.theme = 'dark';
        }

        this.apply(localStorage.theme);
    },
    apply(mode) {
        document.documentElement.classList[mode === 'dark' ? 'add' : 'remove']('dark');
    },
    toggle() {
        localStorage.theme = this.mode = this.mode === 'dark' ? 'light' : 'dark';

        this.apply(this.mode);
    }
})
