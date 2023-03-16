<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <title>{{ $title = empty($title) ? config('site.title') : "{$title} | ".config('site.title') }}</title>
    <meta charset="utf-8">
    <title>Pest | The elegant PHP testing framework</title>
    <link href="https://pestphp.com/" rel="canonical">

    <meta name="twitter:site" content="@pestphp">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:creator" content="@pestphp">
    <meta name="twitter:image:alt" content="{{ $title }}">

    <meta charset="UTF-8">
    <meta name="author" content="Nuno Maduro">
    <meta name="keywords" content="PHP, Pest, Testing Framework">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" >
    <meta name="description" content="{{ $description = $description ?? 'Pest is a testing framework with a focus on simplicity, meticulously designed to bring back the joy of testing in PHP.' }}">

    <meta property="og:type" content="website">
    <meta property="og:title" content="{{ $title }}">
    <meta property="og:description" content="{{ $description }}">
    <meta property="og:url" content="{{ url()->current() }}">

    @if (str_ends_with(url()->current(), 'announcing-pest2'))
        <meta property="og:image" content="https://next.pestphp.com/assets/img/og-announcement.png">
    @else
        <meta property="og:image" content="https://next.pestphp.com/assets/img/og.png">
    @endif

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="icon" href="/www/favicon.svg" type="image/svg+xml">

    {{ $head ?? '' }}

    @vite(['resources/css/app.scss', 'resources/js/app.js'])
    <script>
        if (!('mode' in localStorage)) {
            localStorage.mode = 'dark';
        }

        document.documentElement.classList[localStorage.mode === 'dark' ? 'add' : 'remove']('dark');
    </script>
    @stack('styles')

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
