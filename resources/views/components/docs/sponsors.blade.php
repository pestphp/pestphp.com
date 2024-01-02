<!-- thin border line on the left side -->
<nav class="ml-8 pl-2 lg:block hidden"
    x-transition:enter="transition-all ease-in-out duration-700"
    x-transition:enter-start="-left-full"
    x-transition:enter-end="left-0"
    x-transition:leave="transition-all ease-in-out duration-700"
    x-transition:leave-start="top-0"
    x-transition:leave-end="-top-full">

    <div x-ref="dialog" x-on:keydown.escape.window="close()"
        class="
            lg:w-48 xl:w-56 lg:h-screen w-full
            lg:mt-8
            fixed lg:relative top-0 left-0 z-50
            h-screen lg:h-auto
            bg-white dark:bg-gray-800 bg-pattern lg:!bg-transparent lg:!bg-none
            pt-16 lg:pt-0
            text-left
        ">
            <div class="
                docs-nav h-full lg:h-auto
                pt-6 lg:pt-0.5 pb-6 px-4 lg:pl-0 lg:pr-4
                overflow-y-auto overflow-x-auto lg:overflow-inherit
            ">
                <ul>
                    <li class="text-center pb-6">
                        <h2>Graceful Sponsors</h2>
                    </li>
                </ul>

                <ul class="pb-8 border-b border-gray-200 dark:border-gray-800 lg:gap-12 drop-shadow lg:px-0 flex flex-wrap items-center justify-center gap-3 px-6 mt-6">
                    <li class="block">
                        <a href="https://forge.laravel.com/?ref=pestphp" target="_blank" rel="noopener" class="table">
                            <img src="/www/assets/sponsors/forge.svg" class="w-auto h-6" />
                        </a>
                    </li>
                    <li class="block">
                        <a href="https://spatie.be/?ref=pestphp" target="_blank" rel="noopener" class="table">
                            <img src="/www/assets/sponsors/spatie.svg" class="w-auto h-16" />
                        </a>
                    </li>
                    <li class="block">
                        <a href="https://www.worksome.com/?ref=pestphp" target="_blank" rel="noopener" class="table">
                            <img src="/www/assets/sponsors/worksome.svg" class="w-auto h-6" />
                        </a>
                    </li>
                </ul>
                <ul class="pb-8 border-b border-gray-200 dark:border-gray-800 drop-shadow md:gap-3 lg:px-0 flex flex-wrap items-center justify-center gap-3 px-6 mt-6">
                    <li class="md:block hidden w-full h-0 -mt-12"></li>
                    <li class="block">
                        <a href="https://akaunting.com/?ref=pestphp" target="_blank" rel="noopener" class="table">
                            <img src="/www/assets/sponsors/akaunting.svg" class="w-auto h-5" />
                        </a>
                    </li>
                    <li class="md:-mt-7 pl-1">
                        <a href="https://codecourse.com/?ref=pestphp" target="_blank" rel="noopener" class="table">
                            <img src="/www/assets/sponsors/codecourse.svg" class="w-auto h-4" />
                        </a>
                    </li>

                    <li class="md:block hidden w-full h-0 -mt-12"></li>
                    <li class="block">
                        <a href="https://laracasts.com/?ref=pestphp" target="_blank" rel="noopener" class="table">
                            <img src="/www/assets/sponsors/laracasts.svg" class="w-auto h-3" />
                        </a>
                    </li>
                    <li class="md:-mt-7 pl-1">
                        <a href="https://laradir.com/?ref=pestphp" target="_blank" rel="noopener" class="table">
                            <img src="/www/assets/sponsors/laradir.svg" class="w-auto h-6" />
                        </a>
                    </li>

                    <li class="md:block hidden w-full h-0 -mt-12"></li>
                    <li class="md:-mt-7">
                        <a href="https://localazy.com/?ref=pestphp" target="_blank" rel="noopener" class="table">
                            <img src="/www/assets/sponsors/localazy.svg" class="w-auto h-4" />
                        </a>
                    </li>
                    <li class="md:-mt-7 pl-1">
                        <a href="https://stormlikes.net/?ref=pestphp" target="_blank" rel="noopener" class="table">
                            <img src="/www/assets/sponsors/stormlikes.svg" class="w-auto h-4" />
                        </a>
                    </li>

                    <li class="md:block hidden w-full h-0 -mt-12"></li>
                    <li class="md:-mt-7 pl-1 mb-8">
                        <a href="https://zapiet.com/?ref=pestphp" target="_blank" rel="noopener" class="table">
                            <img src="/www/assets/sponsors/zapiet.svg" class="w-auto h-5" />
                        </a>
                    </li>
                </ul>
                <div class="mt-8 text-center">
                    <a href="https://github.com/sponsors/nunomaduro" target="_blank" class="sm:w-auto focus:outline-none sm:mt-0 w-full px-8 py-2 text-sm font-bold text-white bg-transparent border border-white rounded-lg">
                        Your logo here
                    </a>
                </div>
            </div>
    </div>
</nav>
