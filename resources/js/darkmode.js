window.ToggleDark = () => {
    return {
        mode: "",
        toggle() {
            if (this.mode === "light") {
                this.mode = "dark";
                localStorage.setItem("mode", this.mode);
                document.querySelector("html").classList.add("dark");
            }
            else {
                this.mode = "light";
                localStorage.setItem('mode', this.mode);
                document.querySelector('html').classList.remove('dark');
            }
        },
        created() {
            if (localStorage.getItem('mode') === 'dark') {
                this.mode = 'dark';
                document.querySelector('html').classList.add('dark');
            }
            else {
                this.mode = 'light';
                document.querySelector('html').classList.remove('dark');
            }
        }
    }
}
