export default () => ({
    mode: localStorage.mode,
    toggle() {
        if (localStorage.mode === "light") {
            this.mode = "dark";
            localStorage.mode = this.mode;
            document.documentElement.classList.add(this.mode);
        }
        else {
            this.mode = "light";
            localStorage.mode = this.mode;
            document.documentElement.classList.remove('dark');
        }
    }
})
