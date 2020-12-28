<div class="relative bg-white overflow-hidden">
    <div class="max-w-screen-xl mx-auto ">
        <div class="relative z-10 bg-white pb-8 lg:max-w-2xl lg:w-full">
            <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" preserveaspectratio="none" viewbox="0 0 100 100">
                <polygon points="50,0 100,0 50,100 0,100">
                </polygon>
            </svg>
            <div class="relative pt-10 px-4">
                <nav class="relative flex sm:h-10 justify-center lg:justify-start">
                    <div>
                        <div class="flex w-full md:w-auto">
                            <a href="/" title="{{ config('site.name') }} home">
                                <img alt="{{ config('site.name') }} logo" loading="lazy" class="h-10 w-auto md:h-15 lg:h-20 hidden motion-safe:block" src="/assets/img/small-logo.gif">
                                    <img alt="{{ config('site.name') }} logo" loading="lazy" class="h-10 w-auto md:h-15 lg:h-20 motion-safe:hidden" src="/assets/img/logo.png">
                                    </img>
                                </img>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
                <div class="text-center lg:text-left">
                    <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-cool-gray-900 sm:text-5xl sm:leading-tight md:text-6xl">
                        An elegant PHP
                        <br/>
                        <span style="color: #65e6ae">
                            Testing Framework
                        </span>
                    </h2>
                    <p class="mt-3 text-base text-cool-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        Pest is a Testing Framework with a focus on simplicity. It was carefully crafted to bring the joy of testing to PHP.
                    </p>
                    <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div class="rounded-md shadow">
                            <a class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-600 hover:bg-purple-500 hover:text-white focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10" href="/docs/installation" style="background-color: #ff89ff">
                                Get started
                            </a>
                        </div>
                        <div class="mt-3 sm:mt-0 sm:ml-3">
                            <a class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-purple-700 bg-purple-100 hover:text-purple-600 hover:bg-purple-50 focus:outline-none focus:shadow-outline focus:border-purple-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10" href="https://github.com/pestphp/pest" rel="noopener" style="color: background-color: #ffe7ff" target="_blank">
                                Source Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <picture>
            <source srcset="/assets/img/webp/hero.webp" type="image/webp">
                <source srcset="/assets/img/hero.jpg" type="image/jpeg">
                    <img alt="" loading="lazy" class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/assets/img/hero.jpg"/>
                </source>
            </source>
        </picture>
    </div>
</div>
<x-welcome.sponsors></x-welcome.sponsors>