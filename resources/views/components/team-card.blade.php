<div class="flex flex-col items-center justify-start font-sans">
    <img class="w-28 h-28 shadow rounded-full mb-6" src="https://github.com/{{ $contributor['github'] }}.png"
         alt="{{ $contributor['name'] }}">

    <span class="text-xl font-semibold mb-1 text-center">{{ $contributor['name'] }}</span>

    <div class="flex flex-col items-center justify-center text-center">
        @if(Arr::has($contributor, 'role'))
            <span class="text-base text-cool-gray-800">{{ $contributor['role'] }}</span>
        @endif

        <div class="mt-4 flex space-x-3 items-center flex-row">
            @if(Arr::has($contributor, 'github'))
                <a title="GitHub" aria-label="GitHub" href="https://github.com/{{ $contributor['github'] }}" target="_blank" rel="external">
                    <x-i.github class="w-5 text-black" />
                </a>
            @endif

            @if(Arr::has($contributor, 'twitter'))
                <a title="Twitter" aria-label="Twitter" href="https://twitter.com/{{ $contributor['twitter'] }}" target="_blank" rel="external">
                    <x-i.twitter class="w-5 mt-px" />
                </a>
            @endif

            @if(Arr::has($contributor, 'links'))
                @foreach($contributor['links'] as $link)
                    <a aria-label="" href="{{ $link['url'] }}" target="_blank" rel="external">
                        <x-i.link class="w-5 text-cool-gray-600" />
                    </a>
                @endforeach
            @endif
        </div>
    </div>
</div>
