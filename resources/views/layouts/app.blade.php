<x-app-layout layout="base" :title="$title" :description="$title"
    class="dark:bg-gray-900 font-sans leading-normal text-gray-900"
    x-data="offcanvasNav">

    @push('styles')
        <link rel="preload" href="{{ mix('css/app.css') }}" as="style">
        <link rel="preload" href="{{ mix('js/app.js') }}" as="script">
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
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
