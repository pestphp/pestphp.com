<x-app-layout layout="app" :title="$matter['title']" :description="$matter['description']">
    <main role="main" class="w-full flex-auto">
        <div class="relative mx-auto min-h-[70vh] max-w-7xl border-x border-zinc-700">
            {{-- crosshair registration marks --}}
            <span class="crosshair -left-1 top-px"></span>
            <span class="crosshair -right-1 top-px"></span>

            <div class="lg:grid lg:grid-cols-[15rem_minmax(0,1fr)_15rem]">
                {{-- left rail: documentation navigation --}}
                <x-docs.sidebar>{!! $index !!}</x-docs.sidebar>

                {{-- center: the document itself --}}
                <div class="min-w-0 px-5 py-10 sm:px-10 lg:border-x lg:border-zinc-700">
                    <div class="mb-8 flex items-center gap-2.5 font-mono text-xs tracking-widest text-zinc-500">
                        <span class="font-bold text-rose-500">//</span>
                        <span>docs</span>
                        <span class="text-zinc-600">/</span>
                        <span class="text-zinc-400">{{ $page }}</span>
                        <a class="ml-auto hidden text-zinc-400 underline-offset-4 hover:text-rose-400 hover:underline lg:inline" href="https://github.com/pestphp/docs/edit/5.x/{{ $page }}.md" target="_blank" rel="noopener">edit this page →</a>
                    </div>

                    <article class="docs-main prose prose-invert max-w-none">
                        {!! $body !!}
                    </article>
                </div>

                {{-- right rail: sponsors --}}
                <x-docs.sponsors />
            </div>
        </div>
    </main>
    <x-i.scrolltotop />
</x-app-layout>
