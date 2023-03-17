<x-app-layout layout="app"  :title="$matter['title']" :description="$matter['description']">

    <main role="main" class="flex-auto w-full">
        <section class="documentation">
            <div class="max-w-5xl md:px-6 lg:flex lg:flex-row px-4 mx-auto">
                <x-docs.sidebar>{!! $index !!}</x-docs.sidebar>
                <div class="docs-main max-w-prose DocSearch-content mx-auto lg:mr-0 relative w-full px-3 lg:px-0 mt-6 mb-20">
                    <div class="w-100 lg:block absolute top-0 right-0 hidden h-8 mt-2 text-sm">
                        <a href="https://github.com/pestphp/docs/edit/master/{{ $page }}.md">Edit this page →</a>
                    </div>
                    {!! $body !!}
                </div>
            </div>
        </section>
    </main>
</x-app-layout>
