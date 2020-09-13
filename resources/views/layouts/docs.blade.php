<x-html :title="$attributes->get('title') ?? ''">
    <x-slot name="head">
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        {{ $head ?? '' }}
    </x-slot>

    <section class="container documentation max-w-8xl mx-auto px-6 md:pl-8 py-4">
        <div class="flex flex-col lg:flex-row">
            <nav id="js-nav-menu" class="nav-menu hidden lg:block">
{{--                @include('_nav.menu', ['items' => $page->navigation])--}}
            </nav>

            <div class="relative DocSearch-content mt-8 w-full lg:w-3/5 break-words pb-16 lg:ml-6">
                {{ $slot }}
            </div>
        </div>
    </section>

    <x-slot name="footer">
        {{ $footer ?? '' }}
    </x-slot>
</x-html>
