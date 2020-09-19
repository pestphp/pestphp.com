<header class="flex bg-white items-center shadow-sm bg-white h-16 py-4" role="banner">
    <div class="container flex items-center max-w-8xl mx-auto px-4 space-x-4 lg:px-4" >
        <div class="flex items-center lg:hidden">
            <button @click.prevent="toggle()">
                <x-i.menu class="h-6 w-6 text-cool-gray-500 opacity-50"></x-i.menu>
            </button>
        </div>

        <div class="flex items-center">
            <a href="/" title="{{ config('app.name')}} home" class="inline-flex items-center">
                <img class="h-6 lg:h-8 mr-3" src="/assets/img/small-logo.png" alt="{{ config('app.name')}} logo" />
            </a>
        </div>

        <div class="flex flex-1 justify-end items-center text-right space-x-6">
            <div id="docsearch"></div>

            <div class="space-x-6 lg:flex hidden">
                <a class="font-medium text-cool-gray-600" 
                    href="/docs">Docs</a>
                <a class="font-medium text-cool-gray-600" 
                    href="#screencasts">Screencasts</a>
            </div>

            <a href="https://twitter.com/{{ config('site.twitter') }}" 
                target="_blank" rel="noopener">
                <x-i.twitter class="h-6 w-6"></x-i.twitter>
            </a>
            <a href="{{ config('site.discord') }}" 
                target="_blank" rel="noopener">
                <x-i.discord class="h-8 w-8"></x-i.discord>
            </a>
            <a href="{{ config('site.github') }}" target="_blank" rel="noopener" 
                class="text-cool-gray-800 hover:text-black">
                <x-i.github class="h-6 w-6"></x-i.github>
            </a>
        </div>
    </div>
</header>