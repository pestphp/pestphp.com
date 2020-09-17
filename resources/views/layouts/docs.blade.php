<x-html :title="$attributes->get('title') ?? ''" 
    class="
    text-cool-gray-800 leading-normal font-sans">
    <x-slot name="head">
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        {{ $head ?? '' }}
    </x-slot>

    <main role="main" class="w-full flex-auto">
        <section class="documentation">
            <div class="max-w-screen-xl mx-auto px-6 lg:grid lg:grid-cols-5 lg:gap-10">

                <x-nav.menu :items="\App\Documentation::navigation()"></x-nav-menu>

                <div class="relative DocSearch-content lg:col-span-4 xl:col-span-3 px-3 lg:ml-8 lg:px-0 mt-8 lg:mt-6">
                    {{ $slot }}
                </div>

                <x-docs.otp></x-docs.otp>
            </div>
        </section>
    </main>

    <x-slot name="footer">
        <script src="{{ mix('js/main.js') }}"></script>
        {{ $footer ?? '' }}
    </x-slot>
</x-html>
