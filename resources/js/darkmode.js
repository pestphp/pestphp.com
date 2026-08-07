const readMode = () => {
    try {
        return ['dark', 'light', 'system'].includes(localStorage.theme) ? localStorage.theme : 'dark';
    } catch (e) {
        return 'dark';
    }
};

const storeMode = (mode) => {
    try {
        localStorage.theme = mode;
    } catch (e) {}
};

export default () => ({
    mode: readMode(),
    systemTheme: window.matchMedia('(prefers-color-scheme: light)'),
    systemListener: null,
    get isLight() {
        return this.mode === 'light';
    },
    get isDark() {
        return this.mode === 'dark';
    },
    get isSystem() {
        return this.mode === 'system';
    },
    get nextMode() {
        return { dark: 'light', light: 'system', system: 'dark' }[this.mode];
    },
    init() {
        this.systemListener = () => {
            if (this.isSystem) this.apply();
        };
        this.systemTheme.addEventListener('change', this.systemListener);
        this.setMode(readMode());
    },
    destroy() {
        this.systemTheme.removeEventListener('change', this.systemListener);
    },
    apply() {
        const light = this.isLight || (this.isSystem && this.systemTheme.matches);

        document.documentElement.classList.toggle('light', light);
        document.documentElement.classList.toggle('dark', !light);
        document.querySelector('meta[name="theme-color"]').content = light ? '#ffffff' : '#18181b';
    },
    setMode(mode) {
        this.mode = ['dark', 'light', 'system'].includes(mode) ? mode : 'dark';
        storeMode(this.mode);
        this.apply();
    },
    toggle() {
        this.setMode(this.nextMode);
    }
})
