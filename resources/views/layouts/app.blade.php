<x-app-layout layout="base" :title="$title" :description="$description"
    class="min-h-screen bg-zinc-900 font-sans text-zinc-200 antialiased selection:bg-rose-600 selection:text-white"
    x-data="offcanvasNav">

    <x-slot name="head">
        <link rel="preload" href="/www/fonts/archivo-var.woff2" as="font" type="font/woff2" crossorigin>
        <link rel="preload" href="/www/fonts/instrument-sans-var.woff2" as="font" type="font/woff2" crossorigin>
        <link rel="preload" href="/www/fonts/jetbrains-mono-var.woff2" as="font" type="font/woff2" crossorigin>
        {{ $head ?? '' }}
    </x-slot>

    @include('_partials.nav')

    {{ $slot }}

    <footer class="container mx-auto border-t border-zinc-700 px-5 pb-8 pt-10 sm:px-8">
        <div class="flex flex-col items-center justify-between gap-4 text-xs text-zinc-400 sm:flex-row">
            <div class="font-mono">
                &copy; {{ date('Y') }} PestPHP — A project by
                <a class="font-medium underline-offset-4 transition-colors hover:text-white hover:underline" href="https://pinkary.com/@nunomaduro" target="_blank" rel="noopener">Nuno Maduro</a>.
                Designed by
                <a class="font-medium underline-offset-4 transition-colors hover:text-white hover:underline" href="https://nunoguerra.com/?ref=pestphp" target="_blank" rel="noopener">Nuno Guerra</a>.
            </div>
            <div class="flex items-center gap-5 font-mono">
                <a class="underline-offset-4 transition-colors hover:text-white hover:underline" href="/llms.txt">/llms.txt</a>
                <a class="underline-offset-4 transition-colors hover:text-white hover:underline" href="{{ config('site.github') }}" target="_blank" rel="noopener">/source</a>
                <a class="underline-offset-4 transition-colors hover:text-white hover:underline" href="/brand">/brand</a>
                <a class="underline-offset-4 transition-colors hover:text-white hover:underline" href="/docs">/docs</a>
            </div>
        </div>
        <svg aria-hidden="true" class="mt-10 h-auto w-full fill-white/10" viewBox="0 0 381 100" xmlns="http://www.w3.org/2000/svg">
            <use href="#pest-wordmark" />
            <use href="#pest-wordmark" class="animate-trace motion-reduce:hidden fill-none stroke-rose-500/60 drop-shadow-[0_0_4px_var(--color-rose-500)] [stroke-dasharray:40_360] stroke-[0.3]" />
        </svg>
    </footer>

    <x-slot name="footer">
        {{ $footer ?? '' }}
    </x-slot>
</x-app-layout>
