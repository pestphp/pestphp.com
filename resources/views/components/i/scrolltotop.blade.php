<button onclick="scrollToTop()" id="scrollToTopBtn" title="Go to top" aria-label="Scroll to top" class="active:scale-96 fixed bottom-8 right-8 z-50 hidden size-10 items-center justify-center rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface-raised)]/90 text-[var(--theme-muted)] backdrop-blur-md transition-colors hover:border-[var(--theme-fg)]/20 hover:text-[var(--theme-fg)]">
    <svg class="size-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
        <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
</button>

<script>
    window.scrollFunction = f => {
        var scrollToTopBtn = document.getElementById("scrollToTopBtn");
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            scrollToTopBtn.style.display = "flex";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    window.onscroll = f => scrollFunction();

    window.scrollToTop = f => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
</script>
