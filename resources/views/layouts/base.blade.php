<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full min-h-screen overflow-x-clip font-sans antialiased">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $title = empty($title) ? config('site.title') : "{$title} | ".config('site.title') }}</title>

    <meta name="description" content="{{ $description = $description ?? 'Pest is a testing framework with a focus on simplicity, meticulously designed to bring back the joy of testing in PHP.' }}">
    <link rel="canonical" href="{{ url()->current() }}">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
    <meta name="author" content="Nuno Maduro">
    <meta name="keywords" content="PHP, Pest, Testing Framework">

    @php($ogImage = str_ends_with(url()->current(), 'announcing-stressless') ? 'https://pestphp.com/assets/img/stressless-announcement.jpg' : 'https://pestphp.com/www/og.png')

    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Pest">
    <meta property="og:locale" content="en_US">
    <meta property="og:title" content="{{ $title }}">
    <meta property="og:description" content="{{ $description }}">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:image" content="{{ $ogImage }}">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@pestphp">
    <meta name="twitter:creator" content="@pestphp">
    <meta name="twitter:title" content="{{ $title }}">
    <meta name="twitter:description" content="{{ $description }}">
    <meta name="twitter:image" content="{{ $ogImage }}">
    <meta name="twitter:image:alt" content="{{ $title }}">

    <meta name="llms-txt" content="{{ $llmsTxt ?? url('/llms.txt') }}">
    <link rel="alternate" type="text/plain" href="{{ $llmsTxt ?? url('/llms.txt') }}" title="LLM-friendly version">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="icon" href="/www/favicon.svg" type="image/svg+xml">
    <link rel="icon" href="/www/favicon-32.png" type="image/png" sizes="32x32">
    <link rel="icon" href="/www/favicon-16.png" type="image/png" sizes="16x16">
    <link rel="icon" href="/www/favicon.ico" sizes="48x48">
    <link rel="apple-touch-icon" href="/www/apple-touch-icon.png" sizes="180x180">
    <link rel="manifest" href="/www/site.webmanifest">
    <meta name="theme-color" content="#18181b">

    {{ $head ?? '' }}

    @vite(['resources/css/app.css', 'resources/js/app.js'])

    @stack('styles')
</head>

<body {{ $attributes->except(['title', 'description']) }}>
    {{--
    <div class="w-full py-3 text-center text-white bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700">
        <p class="mt-0 mb-0">
            🚀 <span class="font-semibold">You’re viewing the documentation for the upcoming
                    <span class="font-bold">Pest 4.x</span> release.</span>
        </p>
        <p class="mt-0 mb-0">
            <a href="https://v3.pestphp.com" class="underline">Click here</a> to view the latest stable version, or
            <a href="/docs/pest-v4-is-here-now-with-browser-testing" class="underline">learn what’s new in Pest 4</a>.
        </p>
    </div>
    --}}


    {{ $slot }}

    {{ $footer ?? "" }}

    @stack('scripts')

    <script src="https://cdn.usefathom.com/script.js" data-site="NYURIQIN" defer></script>
</body>
</html>
