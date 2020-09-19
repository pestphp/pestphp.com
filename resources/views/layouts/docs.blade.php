<x-html :title="$attributes->get('title') ?? ''" 
    class="
    text-cool-gray-800 leading-normal lg:px-2 font-sans" x-data="AppOffCanvasMenu()">
    <x-slot name="head">
        <link rel="stylesheet" href="{{ mix('css/docs.css') }}">
        {{ $head ?? "" }}
    </x-slot>

    <header class="flex bg-white items-center shadow-sm bg-white h-16 py-4" role="banner">
        <div class="container flex items-center max-w-8xl mx-auto px-4 space-x-4 lg:px-4" >
            <div class="block lg:hidden">
                <button @click.prevent="toggle()">Open</button>
            </div>

            <div class="flex items-center">
                <a href="/" title="{{ config('app.name')}} home" class="inline-flex items-center">
                    <img class="h-8 mr-3" src="/assets/img/small-logo.png" alt="{{ config('app.name')}} logo" />
                </a>
            </div>

            <div class="flex flex-1 justify-end items-center text-right space-x-6">
                <div id="docsearch"></div>

                <div class="space-x-6 lg:flex hidden">
                    <a class="font-medium text-cool-gray-600" 
                    href="/docs">Docs</a>
                    <a class="font-medium text-cool-gray-600" 
                    href="#screencasts">Screencasts</a>
                </div>

                <a href="" class="text-cool-gray-800 hover:text-black">
                    <x-i.discord class="h-8 w-8"></x-i.discord>
                </a>
                <a href="" class="text-cool-gray-800 hover:text-black">
                    <x-i.github class="h-6 w-6"></x-i.github>
                </a>
            </div>
        </div>
    </header>

    <main role="main" class="w-full flex-auto">
        <section class="documentation">
            <div class="max-w-screen-xl mx-auto px-8 lg:px-4 xl:px-6 lg:flex lg:flex-row">

                <x-docs.nav.menu :items="\App\Documentation::navigation()"></x-nav-menu>

                <div class="relative docs-main DocSearch-content px-3 lg:ml-10 xl:ml-16 lg:px-0 my-20">
                    {{ $slot }}
                </div> 
            </div>
        </section>
    </main>

    <x-slot name="footer">
        <script src="{{ mix('js/main.js') }}"></script>
        {{ $footer ?? '' }}
    </x-slot>
</x-html>
