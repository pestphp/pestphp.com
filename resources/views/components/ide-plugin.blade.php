<div class="rounded-lg border border-[var(--theme-border)] bg-[var(--theme-surface-raised)] px-8 py-6 shadow-lg shadow-[color:var(--theme-shadow)] transition-[border-color,box-shadow] duration-200 ease-in-out hover:border-[var(--theme-fg)]/20 hover:shadow-xl">
    <div class="flex flex-col lg:flex-row space-y-4 items-center lg:space-y-0">
        <div class="flex items-center justify-center rounded-full border border-[var(--theme-border)] bg-[var(--theme-surface-inset)] p-6 shadow-sm shadow-[color:var(--theme-shadow)] lg:shadow-dome">
            <div class="h-20 w-20 lg:h-16 lg:w-16 flex justify-center items-center">
                <img class="w-full h-full object-center object-contain" src="{{ $logo }}" alt="{{ $title }} logo"/>
            </div>
        </div>
        <div class="flex flex-col justify-center items-center lg:items-start lg:ml-6">
            <a class="text-center text-xl text-[var(--theme-fg)] underline-offset-4 transition-colors hover:text-[var(--theme-accent)] hover:underline lg:text-left" target="_blank" rel="noopener" href="{{ $url }}">{{ $title }}</a>
            <span class="text-center text-xs italic text-[var(--theme-muted)] sm:text-sm lg:text-left">{{ $github }}</span>
        </div>
        <div class="flex flex-grow items-center justify-center text-sm text-[var(--theme-fg)] lg:flex-row lg:justify-end">
            @if (isset($installs))
                <x-i.download class="mr-2 h-6 text-[var(--theme-guideline-positive)]"></x-i.download> {{ number_format($installs) }} downloads
            @endif
        </div>
    </div>
</div>
