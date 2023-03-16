<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <title>{{ $title = empty($title) ? config('site.title') : "{$title} | ".config('site.title') }}</title>
    <meta charset="utf-8">
    <meta name="author" content="Nuno Maduro">
    <meta name="keywords" content="PHP, PHPUnit, Testing, Framework">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="{{ $description = $description ?? 'Pest is a Testing Framework with a focus on simplicity. It was carefully crafted to bring the joy of testing to PHP.' }}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:creator" content="@enunomaduro">
    <meta name="twitter:image:alt" content="{{ $title }}">
    <meta property="og:type" content="website">
    <meta property="og:title" content="{{ $title }}">
    <meta property="og:description" content="{{ $description }}">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:image" content="https://pestphp.com/www/og.png">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="/www/favicon.svg" type="image/svg+xml">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap">

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
