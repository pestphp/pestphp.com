<x-html :title="$attributes->get('title')">
    <x-slot name="head">
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        {{ $head ?? '' }}
    </x-slot>

    {{ $slot }}

    <x-slot name="footer">
        {{ $footer ?? '' }}
    </x-slot>
</x-html>
