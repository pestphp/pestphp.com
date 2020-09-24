<x-app-layout layout="app" :title='"{$matter["title"]} | ".config("site.name")'>
    <x-slot name="head">
        <x-social-meta :title='"{$matter["title"]} | ".config("site.title")'
                       :title='$matter["description"]'
                       image="https://pestphp.com/assets/img/og.jpg">
        </x-social-meta>
    </x-slot>
    <main role="main" class="w-full flex-auto">
        <section class="documentation">
            <div class="max-w-8xl mx-auto px-4 lg:px-4 xl:px-6 lg:flex lg:flex-row">

                <x-docs.sidebar>
                    {!! $index !!}
                </x-docs.sidebar>

                <div class="relative docs-main DocSearch-content w-full px-3 lg:ml-10 xl:ml-16 lg:px-0 mt-10 mb-20">
                    <div class="absolute top-0 right-0 h-8 w-100 lg:mt-12 xl:mt-12 hidden lg:block">
                        <a href="https://github.com/pestphp/docs/edit/master/{{ $page }}.md">Edit this page →</a>
                    </div>

                    {!! $body !!}
                </div>
            </div>
        </section>
    </main>
</x-app-layout>
