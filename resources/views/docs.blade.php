<x-app-layout :description="$matter['description']" :title="$matter['title']" layout="app">
    <main class="w-full flex-auto" role="main">
        <div class="relative container mx-auto min-h-[70vh] border-x border-[var(--theme-border)] bg-[var(--theme-bg)] text-[var(--theme-fg)]">
            {{-- crosshair registration marks: fixed pair riding under the sticky header, as on the landing --}}
            <div class="top-14.25 pointer-events-none fixed inset-x-0 z-10">
                <div class="container relative mx-auto">
                    <span class="crosshair -left-1 top-px"></span>
                    <span class="crosshair -right-1 top-px"></span>
                </div>
            </div>
            <span class="crosshair -left-1.25 -bottom-1.25"></span>
            <span class="crosshair -right-1.25 -bottom-1.25"></span>
            {{-- inner rails (content column border-x) meeting the bottom border --}}
            <span class="crosshair -bottom-1.25 left-59 hidden lg:block"></span>
            <span class="crosshair -bottom-1.25 right-59 hidden lg:block"></span>

            <div class="lg:grid lg:grid-cols-[15rem_minmax(0,1fr)_15rem]">
                {{-- left rail: documentation navigation --}}
                <x-docs.sidebar>{!! $index !!}</x-docs.sidebar>

                {{-- center: the document itself --}}
                <div class="min-w-0 px-5 py-10 sm:px-10 lg:border-x lg:border-[var(--theme-border)]">
                    <div class="mb-8 flex items-center gap-2.5 font-mono text-xs tracking-widest text-[var(--theme-muted)]">
                        <span class="font-bold text-[var(--theme-accent)]">//</span>
                        <span>docs</span>
                        <span class="text-[var(--theme-border)]">/</span>
                        <span>{{ $page }}</span>
                        <a class="ml-auto hidden underline-offset-4 transition-colors hover:text-[var(--theme-accent)] hover:underline lg:inline" href="https://github.com/pestphp/docs/edit/5.x/{{ $page }}.md" rel="noopener" target="_blank">edit this page →</a>
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
