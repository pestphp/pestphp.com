<header class="sticky top-0 z-50 border-b border-zinc-700 bg-zinc-900/85 backdrop-blur-md">
    <nav aria-label="Main" class="h-15.5 mx-auto flex max-w-7xl items-center gap-3 px-5 sm:gap-6 sm:px-8">
        <div class="flex shrink-0 items-center gap-2.5" x-data="pestLogoMenu">
            <a aria-label="Home" class="flex items-center gap-2.5" href="/" @contextmenu.prevent="openMenu($event)">
                <span class="sr-only">Pest | The elegant PHP testing framework</span>
                <svg aria-label="PEST" class="block h-7 w-auto fill-zinc-200" role="img" viewBox="0 0 381 100" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" d="M16.607 27.51 22.994 0h85.181L93.484 63.272H36.697l-8.303 35.763H0l14.69-63.272h56.788l1.916-8.253zM295.574 0h85.181l-6.387 27.51h-39.752L318.01 99.035h-28.394l16.607-71.525h-73.824l-1.917 8.253h56.788l-6.387 27.51-1.916 8.252-6.387 27.51h-85.181l6.387-27.51h56.787l1.916-8.253h-56.787l6.387-27.51 1.916-8.252L210.392 0zm-93.7 0h-85.181l-6.387 27.51h85.181zm-25.34 35.763h-68.145l-6.387 27.51h68.145zm8.734 35.762h-85.182l-6.387 27.51h85.181z" fill-rule="evenodd" id="pest-wordmark" />
                </svg>
                <span class="text-2xs hidden rounded-full border border-zinc-700 px-2 py-0.5 font-mono tracking-wide text-zinc-400 sm:inline-block">v{{ config('site.defaultVersion') }}</span>
            </a>

            {{-- right-click brand menu --}}
            <template x-teleport="body">
                <div x-show="open" x-cloak x-transition.opacity.duration.150ms
                    @click.outside="open = false" @keydown.escape.window="open = false" @contextmenu.prevent.stop
                    :style="`left:${x}px;top:${y}px`"
                    class="fixed z-[100] w-56 overflow-hidden rounded-xl border border-zinc-700 bg-zinc-800 py-1.5 shadow-2xl shadow-black/40">
                    <button type="button" @click="copy('logomark')" class="flex w-full items-center gap-3 px-3 py-2 text-left text-sm text-zinc-200 hover:bg-white/5">
                        <svg class="size-4 shrink-0" viewBox="0 0 228 204" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M227.1,57.9C232.7,26,211.4,0,179.6,0H35.8L25.6,57.9h143.9l-3.4,19.3H22.2L0,204h57.6l12.1-69H156c31.8,0,62.1-26,67.7-57.9L227.1,57.9z"/></svg>
                        Copy Logo as SVG
                    </button>
                    <button type="button" @click="copy('wordmark')" class="flex w-full items-center gap-3 px-3 py-2 text-left text-sm text-zinc-200 hover:bg-white/5">
                        <svg class="size-4 shrink-0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M4 7V5h16v2M9 5v14m-2 0h4" /></svg>
                        Copy Wordmark as SVG
                    </button>
                    <div class="my-1.5 border-t border-zinc-700"></div>
                    <a href="/brand" class="flex w-full items-center gap-3 px-3 py-2 text-left text-sm text-zinc-200 hover:bg-white/5">
                        <svg class="size-4 shrink-0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 3 3 7.5 12 12l9-4.5L12 3ZM3 12l9 4.5L21 12M3 16.5 12 21l9-4.5" /></svg>
                        Brand Guidelines
                    </a>
                </div>
            </template>
        </div>

        <div class="ml-2 hidden gap-6 lg:flex">
            <a class="text-sm font-medium text-zinc-200 underline-offset-4 hover:underline" href="/docs">Documentation</a>
            <a class="text-sm font-medium text-zinc-400 underline-offset-4 hover:underline" href="https://youtube.com/@nunomaduro" target="_blank" rel="noopener">YouTube</a>
            <a class="text-sm font-medium text-zinc-400 underline-offset-4 hover:underline" href="https://github.com/sponsors/nunomaduro" target="_blank" rel="noopener">Sponsor</a>
        </div>

        <div class="ml-auto flex min-w-0 flex-1 items-center justify-end gap-3 sm:flex-none sm:gap-4">
            <div id="docsearch" class="min-w-0 max-w-xs flex-1 sm:flex-none"></div>

            <a class="hidden items-center gap-2 text-sm font-semibold text-zinc-200 transition-colors hover:text-rose-400 sm:inline-flex" href="{{ config('site.github') }}" target="_blank" rel="noopener">
                <svg class="size-4" fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" d="M16 0C7.16 0 0 7.16 0 16c0 7.08 4.58 13.06 10.94 15.18.8.14 1.1-.34 1.1-.76 0-.38-.02-1.64-.02-2.98-4.02.74-5.06-.98-5.38-1.88-.18-.46-.96-1.88-1.64-2.26-.56-.3-1.36-1.04-.02-1.06 1.26-.02 2.16 1.16 2.46 1.64 1.44 2.42 3.74 1.74 4.66 1.32.14-1.04.56-1.74 1.02-2.14-3.56-.4-7.28-1.78-7.28-7.9 0-1.74.62-3.18 1.64-4.3-.16-.4-.72-2.04.16-4.24 0 0 1.34-.42 4.4 1.64 1.28-.36 2.64-.54 4-.54 1.36 0 2.72.18 4 .54 3.06-2.08 4.4-1.64 4.4-1.64.88 2.2.32 3.84.16 4.24 1.02 1.12 1.64 2.54 1.64 4.3 0 6.14-3.74 7.5-7.3 7.9.58.5 1.08 1.46 1.08 2.96 0 2.14-.02 3.86-.02 4.4 0 .42.3.92 1.1.76A16.026 16.026 0 0 0 32 16c0-8.84-7.16-16-16-16Z" fill-rule="evenodd" fill="currentColor"></path>
                </svg>
                10k+
            </a>

            <button @click.prevent="toggle()" aria-label="Toggle Documentation Navigation" class="active:scale-96 flex size-8 shrink-0 items-center justify-center text-zinc-400 transition hover:text-zinc-200 lg:hidden" type="button">
                <svg class="size-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
            </button>
        </div>
    </nav>
</header>
