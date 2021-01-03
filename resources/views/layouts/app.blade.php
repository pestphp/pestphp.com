<x-app-layout layout="base" :title="$title" :description="$title"
              class="text-gray-800 leading-normal lg:px-2 font-sans"
              x-data="AppOffCanvasMenu()">
    @push('styles')
        <link rel="preload" href="{{ mix('css/docs.css') }}" as="style">
        <link rel="preload" href="{{ mix('js/app.js') }}" as="script">

        <link rel="stylesheet" href="{{ mix('css/docs.css') }}">
    @endpush
    <x-slot name="head">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        {{ $head ?? '' }}
    </x-slot>

    @include('_partials.nav')

    {{ $slot }}

    <x-slot name="footer">
        {{ $footer ?? '' }}
    </x-slot>
    @push('scripts')
        <script defer src="{{ mix('js/app.js') }}"></script>
    @endpush
</x-app-layout>
