<x-app-layout layout="base" :title="$title" :description="$description"
    class="min-h-screen overflow-x-clip bg-[var(--theme-bg)] font-sans text-[var(--theme-fg)] antialiased selection:bg-[var(--theme-accent)] selection:text-[var(--theme-accent-contrast)]"
    x-data="offcanvasNav">

    <x-slot name="head">
        <link rel="preload" href="/www/fonts/archivo-var.woff2" as="font" type="font/woff2" crossorigin>
        <link rel="preload" href="/www/fonts/instrument-sans-var.woff2" as="font" type="font/woff2" crossorigin>
        <link rel="preload" href="/www/fonts/jetbrains-mono-var.woff2" as="font" type="font/woff2" crossorigin>
        {{ $head ?? '' }}
    </x-slot>

    @include('_partials.nav')

    {{ $slot }}

    <footer class="container mx-auto border-t border-[var(--theme-border)] px-5 pb-8 pt-10 sm:px-8">
        <div class="flex flex-col items-start justify-between gap-4 text-xs text-[var(--theme-muted)] sm:flex-row sm:items-center">
            <div class="font-mono">
                &copy; {{ date('Y') }} PestPHP — A project by
                <a class="font-medium underline-offset-4 transition-colors hover:text-[var(--theme-fg)] hover:underline" href="https://pinkary.com/@nunomaduro" target="_blank" rel="noopener">Nuno Maduro</a>.
                Designed by
                <a class="font-medium underline-offset-4 transition-colors hover:text-[var(--theme-fg)] hover:underline" href="https://nunoguerra.com/?ref=pestphp" target="_blank" rel="noopener">Nuno Guerra</a>.
            </div>
            <div class="flex items-center gap-5 font-mono">
                <a class="underline-offset-4 transition-colors hover:text-[var(--theme-fg)] hover:underline" href="/llms.txt">/llms.txt</a>
                <a class="underline-offset-4 transition-colors hover:text-[var(--theme-fg)] hover:underline" href="{{ config('site.github') }}" target="_blank" rel="noopener">/source</a>
                <a class="underline-offset-4 transition-colors hover:text-[var(--theme-fg)] hover:underline" href="/brand">/brand</a>
                <a class="underline-offset-4 transition-colors hover:text-[var(--theme-fg)] hover:underline" href="/docs">/docs</a>
            </div>
        </div>
        <svg aria-hidden="true" class="mt-10 h-auto w-full fill-[var(--theme-fg)]/10" viewBox="0 0 381 100" xmlns="http://www.w3.org/2000/svg">
            <use href="#pest-wordmark" />
            <use href="#pest-wordmark" class="animate-trace motion-reduce:hidden fill-none stroke-[var(--theme-accent)]/60 drop-shadow-[0_0_4px_var(--theme-accent)] [stroke-dasharray:40_360] stroke-[0.3]" />
        </svg>
    </footer>

    <x-slot name="footer">
        {{ $footer ?? '' }}
    </x-slot>
</x-app-layout>
