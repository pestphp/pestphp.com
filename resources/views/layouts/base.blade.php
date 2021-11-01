<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf-token" content="{{ csrf_token() }}">
    @php
        $newTitle = empty($title) ? config('site.title') : "{$title} | ".config('site.title')
    @endphp
    <title>{{ $newTitle }}</title>

    <meta name="description" content="{{ $description ?? config('site.description') }}">

    <meta property="og:site_name" content="{{ config('site.title') }}"/>
    <meta property="og:title" content="{{ $newTitle }}"/>
    <meta property="og:description" content="{{ $description ?? config('site.description') }}"/>
    <meta property="og:url" content="{{ url()->current() }}"/>
    <meta property="og:image" content="https://pestphp.com/assets/img/og.jpg"/>
    <meta property="og:type" content="website"/>

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:creator" content="@enunomaduro">
    <meta name="twitter:image:alt" content="Pest - An elegant PHP Testing Framework">

    <link rel="icon" href="/favicon.ico">

    {{ $head ?? '' }}

    @stack('styles')

    <script>
        function updateTheme() {
            if (!('mode' in localStorage)) {
                localStorage.mode = 'light';
            }

            switch (localStorage.mode) {
                case 'dark':
                    document.documentElement.classList.add('dark');
                    break;

                case 'light':
                    document.documentElement.classList.remove('dark');
                    break;
            }
        }

        updateTheme();
    </script>
</head>
<body {{ $attributes->except(['title', 'description']) }}>

{{ $slot }}

{{ $footer ?? "" }}

@stack('scripts')

@if (app()->environment('production'))
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-61404619-4"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-61404619-4');
    </script>
@endif
</body>
</html>
