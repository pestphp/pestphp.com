<header class="flex bg-white dark:bg-gray-700 items-center shadow-sm bg-white h-16 py-4" role="banner">
    <div class="container flex items-center max-w-8xl mx-auto px-4 space-x-4 lg:px-4">
        <div class="flex items-center lg:hidden">
            <button aria-label="Toggle Documentation Navigation" @click.prevent="toggle()">
                <x-i.menu class="h-6 w-6 md:h-8 md:w-8 text-gray-500 dark:text-white opacity-50"></x-i.menu>
            </button>
        </div>

        <div class="flex items-center">
            <a href="/" title="{{ config('app.name')}} home" class="inline-flex items-center">
                <img class="h-4 md:h-6 lg:h-8 mr-3 flex dark:hidden" loading="lazy" src="/assets/img/small-logo.png" alt="{{ config('app.name')}} logo"/>
                <img class="h-4 md:h-6 lg:h-8 mr-3 hidden dark:flex" loading="lazy" src="/assets/img/logo.svg" alt="{{ config('app.name')}} logo"/>
            </a>
        </div>

        <div class="flex flex-1 justify-end items-center text-right space-x-2">
            <button type="button" aria-pressed="false" x-data="ToggleDark()" x-cloak x-init="created()" title="Dark Mode" @click.prevent="toggle()"
                class="bg-gray-300 dark:bg-gray-500 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent
                rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2
                focus:ring-offset-2 focus:ring-gray-500">

                <span class="translate-x-0 dark:translate-x-5 relative inline-block h-5 w-5 rounded-full bg-white
                shadow transform ring-0 transition ease-in-out duration-200">
                    <span class="dark:hidden opacity-100 ease-in duration-200 dark:opacity-0 dark:ease-out dark:duration-100
                    absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
                        aria-hidden="true">
                        <svg class="h-3 w-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343
                                  17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
                            </path>
                        </svg>
                    </span>

                    <span
                        class="hidden dark:flex opacity-0 ease-out duration-100 dark:opacity-0 dark:ease-out dark:duration-100
                        absolute inset-0 h-full w-full items-center justify-center transition-opacity opacity-100 ease-in duration-200 "
                        aria-hidden="true">
                        <svg class="h-3 w-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z">
                            </path>
                        </svg>
                    </span>
                </span>
            </button>

            <div id="docsearch"></div>

            <div class="hidden lg:flex">
                @include('_partials.nav-items')
            </div>
        </div>
    </div>
</header>
