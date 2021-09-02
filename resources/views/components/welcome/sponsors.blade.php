<div class="w-full py-4 px-4 bg-white shadow">
    <div class="lg:max-w-2xl lg:w-full mx-auto">
        <div class="flex flex-col space-y-4 items-center">
            <div class="flex flex-col lg:flex-row items-center space-y-4 lg:space-x-4 lg:space-y-0">
                @foreach(config('sponsors') as $name => $sponsor)
                    <div>
                        <a href="{{ $sponsor['website'] }}" target="_blank" rel="noopener">
                            <img alt="{{ $name }}" loading="lazy" style="max-width: {{ $sponsor['max_width'] }};" src="{{ asset($sponsor['image']) }}"/>
                        </a>
                    </div>
                @endforeach
            </div>
            <div class="text-center text-gray-400 font-semibold text-sm">
                Want to see your logo here?
            </div>
            <a  href="https://github.com/sponsors/nunomaduro"
                target="_blank" rel="noopener" class="py-2 px-4 rounded shadow text-white hover:text-white text-xs bg-pink-400">
                Become a Sponsor now
            </a>
        </div>
    </div>
</div>
