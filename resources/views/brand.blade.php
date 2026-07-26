<x-app-layout :description="$description" :title="$title" layout="app" x-data="offcanvasNav">
    @php
        // Preview sizing per asset kind — the glyph is tall, the lockups are wide.
        $previewClass = [
            'wordmark' => 'h-32 [&_svg]:h-9 [&_svg]:w-auto',
            'logomark' => 'h-32 [&_svg]:h-16 [&_svg]:w-auto',
        ];
    @endphp

    <main class="w-full flex-auto" role="main" x-data="{
        svgs: @js($svgs),
        copied: null,
        copy(id) {
            navigator.clipboard.writeText(this.svgs[id]);
            this.copied = id;
            setTimeout(() => { if (this.copied === id) this.copied = null }, 2000);
        },
    }">
        <div class="container relative mx-auto border-x border-zinc-700">
            <span class="crosshair -left-1 top-px"></span>
            <span class="crosshair -right-1 top-px"></span>

            {{-- ============================================================= --}}
            {{-- Heading --}}
            {{-- ============================================================= --}}
            <section class="pt-19 relative px-5 pb-10 sm:px-10">
                <div class="flex items-center gap-2.5 font-mono text-xs tracking-widest text-zinc-400">
                    <span class="font-bold text-rose-500">//</span> brand
                </div>
                <h1 class="font-display font-stretch-112% mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Pest brand <em class="text-rose-500">assets.</em>
                </h1>
                <p class="mt-4 max-w-[52ch] text-pretty text-lg text-zinc-400">
                    Logos, wordmarks, and the colors that hold them together. Copy any asset as SVG, or grab the file. Please keep the marks intact — the shapes and colors below are the whole kit.
                </p>
                <div class="mt-7 flex flex-wrap items-center gap-3">
                    <button @click="copy('wordmark-white')" class="active:scale-96 inline-flex items-center gap-2 rounded-full bg-rose-500 px-4 py-2.5 text-sm font-semibold text-white transition-[background-color,scale] hover:bg-rose-600" type="button">
                        <svg class="size-4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" stroke="currentColor" viewBox="0 0 24 24">
                            <rect height="11" rx="2" width="11" x="9" y="9" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        <span x-text="copied === 'wordmark-white' ? 'copied wordmark!' : 'copy wordmark svg'"></span>
                    </button>
                    <a class="active:scale-96 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold transition-[border-color,scale] hover:border-white/30" download href="/logo/wordmark-white.svg">
                        <svg class="size-4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
                        </svg>
                        download svg
                    </a>
                </div>
            </section>

            {{-- ============================================================= --}}
            {{-- Asset groups --}}
            {{-- ============================================================= --}}
            @foreach ($assets as $group)
                <section class="pb-19 relative border-t border-zinc-700 px-5 pt-16 sm:px-10">
                    <span class="crosshair -left-1 -top-1"></span>
                    <span class="crosshair -right-1 -top-1"></span>

                    <div class="text-2xs mb-2 font-mono tracking-widest text-rose-500">// {{ $group['kind'] }}</div>
                    <h2 class="font-display font-stretch-112% text-2xl font-extrabold tracking-tight">{{ $group['label'] }}</h2>
                    <p class="mt-2 max-w-[60ch] text-pretty text-sm/relaxed text-zinc-400">{{ $group['description'] }}</p>

                    <div class="gap-4.5 mt-8 grid sm:grid-cols-2">
                        @foreach ($group['variants'] as $variant)
                            <article class="flex flex-col overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-800">
                                {{-- preview surface --}}
                                <div class="{{ $variant['surface'] === 'light' ? 'border-zinc-200/60 bg-zinc-100' : 'border-zinc-700 bg-zinc-900' }} {{ $previewClass[$group['id']] }} mx-4 mt-4 flex items-center justify-center rounded-[10px] border">
                                    {!! $svgs[$variant['id']] !!}
                                </div>

                                <div class="flex items-center justify-between gap-2 px-4 py-4">
                                    <span class="font-mono text-xs tracking-widest text-zinc-400">{{ $group['id'] }} · {{ $variant['label'] }}</span>
                                    <div class="flex items-center gap-1.5">
                                        <button @click="copy('{{ $variant['id'] }}')" class="active:scale-96 text-2xs rounded-full border border-zinc-700 px-2.5 py-1 font-mono text-zinc-300 transition-[border-color,scale] hover:border-zinc-200/20 hover:text-zinc-100" type="button" x-text="copied === '{{ $variant['id'] }}' ? 'copied!' : 'copy svg'"></button>
                                        <a aria-label="Download {{ $group['id'] }} {{ $variant['label'] }} SVG" class="active:scale-96 flex size-7 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-[border-color,color,scale] hover:border-zinc-200/20 hover:text-zinc-100" download href="/logo/{{ $variant['file'] }}">
                                            <svg class="size-3.5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" stroke="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 3v11m0 0 3.5-3.5M12 14 8.5 10.5M5 20h14" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </article>
                        @endforeach
                    </div>
                </section>
            @endforeach

            {{-- ============================================================= --}}
            {{-- Clearspace --}}
            {{-- ============================================================= --}}
            <section class="pb-19 relative border-t border-zinc-700 px-5 pt-16 sm:px-10">
                <span class="crosshair -left-1 -top-1"></span>
                <span class="crosshair -right-1 -top-1"></span>

                <div class="text-2xs mb-2 font-mono tracking-widest text-rose-500">// breathing room</div>
                <h2 class="font-display font-stretch-112% text-2xl font-extrabold tracking-tight">Clearspace</h2>
                <p class="mt-2 max-w-[60ch] text-pretty text-sm/relaxed text-zinc-400">
                    Keep clear space around the mark equal to the height of the glyph's stem. Don't crowd it, and never let other logos or type break into the margin.
                </p>

                <div class="mt-8 flex items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-900 p-8 sm:p-16">
                    <div class="relative p-10 sm:p-14">
                        {{-- clearspace guides --}}
                        <span class="pointer-events-none absolute inset-0 rounded-md border border-dashed border-rose-500/40"></span>
                        <svg aria-label="PEST" class="block h-8 w-auto fill-zinc-200 sm:h-11" role="img" viewBox="0 0 381 100" xmlns="http://www.w3.org/2000/svg">
                            <use href="#pest-wordmark" />
                        </svg>
                    </div>
                </div>
            </section>

            {{-- ============================================================= --}}
            {{-- Palette --}}
            {{-- ============================================================= --}}
            <section class="pb-19 relative border-t border-zinc-700 px-5 pt-16 sm:px-10">
                <span class="crosshair -left-1 -top-1"></span>
                <span class="crosshair -right-1 -top-1"></span>

                <div class="text-2xs mb-2 font-mono tracking-widest text-rose-500">// palette</div>
                <h2 class="font-display font-stretch-112% text-2xl font-extrabold tracking-tight">Colors</h2>
                <p class="mt-2 max-w-[60ch] text-pretty text-sm/relaxed text-zinc-400">
                    Rose does all the pointing. The green→cyan→pink gradient is reserved for the mark itself. Everything else is zinc.
                </p>

                <div class="gap-4.5 mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
                    @foreach ($palette as $color)
                        <button @click="navigator.clipboard.writeText('{{ $color['value'] }}'); copied = '{{ $color['value'] }}'; setTimeout(() => { if (copied === '{{ $color['value'] }}') copied = null }, 2000)" class="active:scale-96 group flex flex-col overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-800 text-left transition-[border-color,scale] hover:border-zinc-200/20" type="button">
                            <span class="h-16 w-full" style="background-color: {{ $color['value'] }}"></span>
                            <span class="px-4 py-3">
                                <span class="block font-mono text-xs text-zinc-200" x-text="copied === '{{ $color['value'] }}' ? 'copied!' : '{{ $color['value'] }}'"></span>
                                <span class="text-2xs mt-0.5 block font-mono tracking-wide text-zinc-500">{{ $color['note'] }}</span>
                            </span>
                        </button>
                    @endforeach
                </div>
            </section>

            {{-- ============================================================= --}}
            {{-- Usage --}}
            {{-- ============================================================= --}}
            <section class="pb-19 relative border-t border-zinc-700 px-5 pt-16 sm:px-10">
                <span class="crosshair -left-1 -top-1"></span>
                <span class="crosshair -right-1 -top-1"></span>

                <div class="text-2xs mb-2 font-mono tracking-widest text-rose-500">// guidelines</div>
                <h2 class="font-display font-stretch-112% text-2xl font-extrabold tracking-tight">Do &amp; don't</h2>

                <div class="gap-4.5 mt-8 grid lg:grid-cols-2">
                    <div class="rounded-2xl border border-zinc-700 bg-zinc-800 p-6">
                        <div class="mb-3 flex items-center gap-2 font-mono text-xs tracking-widest text-green-400">
                            <span class="bg-green-400 px-1.5 font-bold text-zinc-900">DO</span>
                        </div>
                        <ul class="space-y-2.5 text-sm/relaxed text-zinc-400">
                            <li class="flex gap-2.5"><span class="text-green-400">✓</span> Use the SVGs at their native aspect ratio.</li>
                            <li class="flex gap-2.5"><span class="text-green-400">✓</span> Pick the white mark on dark, the black mark on light.</li>
                            <li class="flex gap-2.5"><span class="text-green-400">✓</span> Give the mark room — respect the clearspace.</li>
                            <li class="flex gap-2.5"><span class="text-green-400">✓</span> Reach for the color mark when you have the contrast for it.</li>
                        </ul>
                    </div>
                    <div class="rounded-2xl border border-zinc-700 bg-zinc-800 p-6">
                        <div class="mb-3 flex items-center gap-2 font-mono text-xs tracking-widest text-red-400">
                            <span class="bg-red-500 px-1.5 font-bold text-zinc-900">DON'T</span>
                        </div>
                        <ul class="space-y-2.5 text-sm/relaxed text-zinc-400">
                            <li class="flex gap-2.5"><span class="text-red-400">✕</span> Stretch, rotate, or recolor the marks.</li>
                            <li class="flex gap-2.5"><span class="text-red-400">✕</span> Add shadows, outlines, or gradients of your own.</li>
                            <li class="flex gap-2.5"><span class="text-red-400">✕</span> Place the color mark on a low-contrast background.</li>
                            <li class="flex gap-2.5"><span class="text-red-400">✕</span> Rebuild the wordmark in another typeface.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </main>
</x-app-layout>
