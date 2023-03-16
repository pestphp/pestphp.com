export default () => ({
    mode: localStorage.mode,
    init() {
        if (!('mode' in localStorage)) {
            localStorage.mode = 'dark';
        }

        this.apply(localStorage.mode);
    },
    apply(mode) {
        document.documentElement.classList[mode === 'dark' ? 'add' : 'remove']('dark');
    },
    toggle() {
        localStorage.mode = this.mode = this.mode === 'dark' ? 'light' : 'dark';

        this.apply(this.mode);
    }
})
