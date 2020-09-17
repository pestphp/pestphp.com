<x-html :title="$attributes->get('title') ?? ''" 
    class="
    text-cool-gray-800 leading-normal font-sans">
    <x-slot name="head">
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        {{ $head ?? '' }}
    </x-slot>

    <main role="main" class="w-full flex-auto">
        <section class="documentation">
            <div class="max-w-screen-xl mx-auto px-6 py-6 lg:grid xl:grid-cols-5 xl:gap-10">
                <nav id="js-nav-menu" class="nav-menu hidden xl:block">
                        <x-nav.menu :items="\App\Documentation::navigation()"></x-nav-menu>
                </nav>

                <div class="relative DocSearch-content xl:col-span-3 px-3 xl:px-0 mt-8 xl:mt-6">
                    {{ $slot }}
                </div>
                <div class="lg:sticky xl:w-56 overflow-y-auto h-screen-24 lg:top-0">
                    <div class="mt-8 mb-2">
                        <h3 class="px-3 mb-0 text-xs leading-4 font-bold text-cool-gray-400 uppercase tracking-wider">
                            On This Page
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <x-slot name="footer">
        <script src="{{ mix('js/main.js') }}"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/highlight.min.js"></script>
        <script>
            document.querySelectorAll('pre code').forEach((block) => {
                hljs.initHighlightingOnLoad();
            });
        </script>
        {{ $footer ?? '' }}
    </x-slot>
</x-html>
