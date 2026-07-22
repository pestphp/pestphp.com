<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full min-h-screen overflow-x-clip font-sans antialiased">

<head>
    <title>{{ $title = empty($title) ? config('site.title') : "{$title} | ".config('site.title') }}</title>
    <meta charset="utf-8">
    <title>Pest | The elegant PHP testing framework</title>

    {{--
    <meta name="robots" content="noindex, nofollow">
    <meta name="googlebot" content="noindex, nofollow">
    --}}

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

    @if (str_ends_with(url()->current(), 'announcing-stressless'))
        <meta property="og:image" content="https://pestphp.com/assets/img/stressless-announcement.jpg">
    @else
        <meta property="og:image" content="https://pestphp.com/assets/img/og-v4.jpg">
    @endif

    <meta name="llms-txt" content="{{ $llmsTxt ?? url('/llms.txt') }}">
    <link rel="alternate" type="text/plain" href="{{ $llmsTxt ?? url('/llms.txt') }}" title="LLM-friendly version">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="icon" href="/www/favicon.svg" type="image/svg+xml">

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
