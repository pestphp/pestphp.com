<nav
    class="lg:block"
    :class="{ 'block': isOpen === true, 'hidden lg:block': isOpen === false }"
>
    {{-- mobile backdrop --}}
    <div
        x-show="isOpen"
        x-cloak
        @click="close()"
        x-transition:enter="transition-opacity ease-out duration-200"
        x-transition:enter-start="opacity-0"
        x-transition:enter-end="opacity-100"
        x-transition:leave="transition-opacity ease-in duration-150"
        x-transition:leave-start="opacity-100"
        x-transition:leave-end="opacity-0"
        class="fixed inset-0 z-40 bg-zinc-900/80 backdrop-blur-sm lg:hidden"
    ></div>

    <div
        x-ref="dialog"
        x-on:keydown.escape.window="close()"
        x-transition:enter="transition ease-in-out duration-300 transform"
        x-transition:enter-start="translate-x-full"
        x-transition:enter-end="translate-x-0"
        x-transition:leave="transition ease-in-out duration-200 transform"
        x-transition:leave-start="translate-x-0"
        x-transition:leave-end="translate-x-full"
        class="scrollbar-ghost fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col overflow-y-auto border-l border-zinc-700 bg-zinc-900 px-6 py-5 lg:sticky lg:inset-auto lg:top-15.5 lg:z-0 lg:h-[calc(100vh-3.875rem)] lg:max-w-none lg:translate-x-0 lg:border-l-0 lg:bg-transparent lg:px-5 lg:py-8"
    >
        {{-- mobile drawer header --}}
        <div class="mb-6 flex items-center justify-between lg:hidden">
            <span class="font-mono text-xs tracking-widest text-zinc-400"><span class="font-bold text-rose-500">//</span> documentation</span>
            <button @click="close()" type="button" aria-label="Close navigation" class="active:scale-96 flex size-8 items-center justify-center text-zinc-400 transition hover:text-zinc-200">
                <svg class="size-6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <div class="docs-nav scrollbar flex-1 overflow-y-auto lg:overflow-visible">
            {{ $slot }}
        </div>
    </div>
</nav>
