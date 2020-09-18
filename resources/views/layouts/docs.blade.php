<x-html :title="$attributes->get('title') ?? ''" 
    class="
    text-cool-gray-800 leading-normal lg:px-2 font-sans">
    <x-slot name="head">
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@docsearch/css@alpha"
        />
        {{ $head ?? "" }}
    </x-slot>

    <header class="flex bg-white z-50 sticky top-0 items-center shadow-sm bg-white h-16 py-4" role="banner">
        <div class="container flex items-center max-w-8xl mx-auto px-4 lg:px-4">
            <div class="flex items-center">
                <a href="/" title="{{ config('app.name')}} home" class="inline-flex items-center">
                    <img class="h-8 mr-3" src="/assets/img/small-logo.png" alt="{{ config('app.name')}} logo" />
                </a>
            </div>

            <div class="flex flex-1 justify-end items-center text-right md:pl-10">
                <div id="docsearch"></div>
            </div>
        </div>

        {{-- @yield('nav-toggle') --}}
    </header>

    <main role="main" class="w-full flex-auto">
        <section class="documentation">
            <div class="max-w-screen-xl mx-auto px-8 lg:px-4 xl:px-6 lg:flex lg:flex-row lg:gap-10">

                <x-nav.menu :items="\App\Documentation::navigation()"></x-nav-menu>

                <div class="relative docs-main DocSearch-content px-3 lg:ml-10 xl:ml-16 lg:px-0 mt-8">
                    {{ $slot }}
                </div>

                <div>
                    {{ $toc ?? "" }}
                </div>    
            </div>
        </section>
    </main>

    <x-slot name="footer">
        <script src="{{ mix('js/main.js') }}"></script>
        {{ $footer ?? '' }}
        <script src="https://cdn.jsdelivr.net/npm/@docsearch/js@alpha"></script>
        <script>
          docsearch({
            container: '#docsearch',
            apiKey: 'd25b0b281fd72e7b8ce770857fff45bf',
            indexName: 'pestphp',
          });
        </script>
    </x-slot>
</x-html>
