<div class="rounded-md shadow-dome border-gray-300 transition duration-200 ease-in-out px-16 py-12">
    <div class="flex flex-col lg:flex-row space-y-8 lg:space-y-0">
        <div class="flex lg:items-center justify-center bg-white rounded-full lg:shadow-dome py-6 px-6">
            <img class="h-20 lg:h-16" src="{{ $logo }}" alt="{{ $title }} logo"/>
        </div>
        <div class="flex flex-col items-center justify-center lg:ml-16">
            <a class="text-2xl" target="_blank" rel="noopener" href="{{ $url }}">{{ $title }}</a>
            <span>{{ $github }}</span>
        </div>
        <div class="flex justify-center lg:flex-row flex-grow items-center lg:justify-end lg:ml-16">
            @if(isset($installs))
                <x-i.download class="h-6 text-green-500 mr-2"></x-i.download> {{ $installs }} downloads
            @endif
        </div>
    </div>
</div>
