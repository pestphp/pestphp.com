<header class="flex items-center dark:shadow-white/10 h-16 py-4 relative z-[100] bg-white/50 dark:bg-black/20 backdrop-blur-md" role="banner">
    <div class="max-w-5xl px-6 lg:px-1 xl:px-2 container flex items-center mx-auto space-x-3">
        <div class="lg:hidden flex items-center">
            <button aria-label="Toggle Documentation Navigation" @click.prevent="toggle()">
                <x-i.menu class="md:h-8 md:w-8 dark:text-white w-6 h-6 text-gray-500 opacity-50"></x-i.menu>
            </button>
        </div>

        <div class="flex items-center flex-none">
            <a href="/" class="flex items-center justify-center">
                <img src="/www/assets/logo.svg"
                    alt="pestphp logo"
                    class="xl:ml-0 lg:ml-1.5"
                    style="height:24px"
                />
            </a>
        </div>

        {{-- <div class="md:block w-full"></div> --}}

        <div class="flex items-center justify-end w-full pr-5">
            <div id="docsearch"></div>
        </div>

        <div class="flex items-center justify-end space-x-1 text-right">
            <button
                type="button"
                x-cloak
                x-data="ToggleDark"
                class="group"
                title="Dark Mode"
                @click.prevent="toggle()"
                aria-haspopup="true"
                aria-expanded="false"
            >
                <span class="dark:hidden">
                    <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                        <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" class="fill-transparent stroke-gray-400 group-hover:stroke-gray-600 transition"></path>
                        <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" class="stroke-gray-400 group-hover:stroke-gray-600 transition"></path>
                    </svg>
                </span>
                <span class="dark:inline hidden">
                    <svg viewBox="0 0 24 24" fill="none" class="w-6 h-6">
                        <path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" class="fill-white group-hover:dark:fill-gray-600 transition"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" class="fill-white group-hover:dark:fill-gray-600 transition"></path>
                    </svg>
                </span>
            </button>

            <div class="lg:flex hidden">
                @include('_partials.nav-items')
            </div>
        </div>
    </div>
</header>
