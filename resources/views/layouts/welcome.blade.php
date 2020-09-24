<x-app-layout layout="base" :title="$attributes->get('title')">
    @push('styles')
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    @endpush
    <x-slot name="head">
        {{ $head ?? '' }}
    </x-slot>

    {{ $slot }}

    <x-slot name="footer">
        {{ $footer ?? '' }}
    </x-slot>
</x-app-layout>
