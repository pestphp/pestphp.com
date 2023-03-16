<nav class="lg:block hidden"
    :class="{ 'block lg:block': isOpen === true, 'hidden lg:block': isOpen === false }"
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
                {{ $slot }}
            </div>
    </div>
</nav>
