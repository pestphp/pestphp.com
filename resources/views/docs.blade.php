<x-app-layout layout="app" :title="$matter['title']" :description="$matter['description']">
    <x-slot name="head">
        <link rel="alternate" type="text/plain" href="{{ url("/docs/{$page}/llms.txt") }}" title="LLM-friendly version">
    </x-slot>

    <main role="main" class="flex-auto overflow-hidden w-full">
        <section class="documentation">
            <div class="max-w-7xl sm:px-6 lg:flex lg:px-8 mx-auto">
                <x-docs.sidebar>{!! $index !!}</x-docs.sidebar>
                <div class="mx-auto">
                    <div class="lg:block hidden text-sm">
                        <a href="https://github.com/pestphp/docs/edit/4.x/{{ $page }}.md">Edit this page →</a>
                    </div>
                    <div class="docs-main max-w-prose prose prose-invert DocSearch-content mx-auto relative w-full px-3 lg:px-0 mt-6 mb-20">
                        {!! $body !!}
                    </div>
                </div>
                <x-docs.sponsors />
            </div>
        </section>
    </main>
    <x-i.scrolltotop />
</x-app-layout>
