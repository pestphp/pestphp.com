<x-html :title="$attributes->get('title')">
    <x-slot name="head">
        {{ $head ?? '' }}
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    </x-slot>

    {{ $slot }}

    <x-slot name="footer">
        {{ $footer ?? '' }}
    </x-slot>
</x-html>
