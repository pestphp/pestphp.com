<x-app-layout layout="welcome" :title="config('app.name')">
    <x-slot name="head">
        <x-social-meta
            :title="config('app.name')"
            description="Introducing Pest: An elegant PHP Testing Framework with a focus on simplicity"
            image="https://pestphp.com/assets/img/og.jpg"
        />
    </x-slot>

    <section>
        <div class="relative bg-white overflow-hidden">
            <div class="max-w-screen-xl mx-auto ">
                <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <svg
                        class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                        fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="50,0 100,0 50,100 0,100"/>
                    </svg>
                    <div class="relative pt-10 px-4">
                        <nav class="relative flex sm:h-10 justify-center lg:justify-start">
                            <div>
                                <div class="flex w-full md:w-auto">
                                    <a href="/" title="{{ config('app.name') }} home">
                                        <img class="h-10 w-auto md:h-15 lg:h-20 hidden motion-safe:block"
                                             src="/assets/img/small-logo.gif" alt="{{ config('app.name') }} logo">
                                        <img class="h-10 w-auto md:h-15 lg:h-20 motion-safe:hidden"
                                             src="/assets/img/logo.png" alt="{{ config('app.name') }} logo">
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
                                <span style="color: #65e6ae">Testing Framework</span>
                            </h2>
                            <p class="mt-3 text-base text-cool-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Pest is a Testing Framework with a focus on simplicity. It was carefully crafted to
                                bring the joy of testing to PHP.
                            </p>
                            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div class="rounded-md shadow">
                                    <a href="/docs/installation" style="background-color: #ff89ff"
                                       class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-600 hover:bg-purple-500 hover:text-white focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                                        Get started
                                    </a>
                                </div>
                                <div class="mt-3 sm:mt-0 sm:ml-3">
                                    <a target="_blank" href="https://github.com/pestphp/pest" rel="noreferrer"
                                       style="color: background-color: #ffe7ff"
                                       class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-purple-700 bg-purple-100 hover:text-purple-600 hover:bg-purple-50 focus:outline-none focus:shadow-outline focus:border-purple-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
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
                    <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/assets/img/hero.jpg"
                         alt=""/>
                </picture>
            </div>
        </div>

        <div class="bg-cool-gray-50 relative overflow-hidden lg:py-6 text-center lg:text-left">
            <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
                <div class="relative mt-12 sm:mt-16 lg:mt-24">
                    <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div class="col-start-2 lg:col-start-2">
                            <h4 class="text-2xl leading-8 font-extrabold text-cool-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                                Interfaces that people love
                            </h4>
                            <p class="mt-3 text-lg leading-7 text-cool-gray-500">
                                Pest gives you the most beautiful test reporting in the world, straight from the
                                console! Also, the readable errors and stack traces make debugging lightning fast.
                            </p>
                        </div>
                        <div class="col-start-1 mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                            <div class="bg-pest absolute top-0 left-0 -mt-12 hidden lg:block"
                                 style="z-index: 0; width: 400px; height: 531px; opacity: 10%">
                            </div>
                            <picture>
                                <source srcset="/assets/img/webp/collision.webp" type="image/webp">
                                <source srcset="/assets/img/collision.png" type="image/png">
                                <img class="relative mx-auto" width="490" src="/assets/img/collision.png" alt=""/>
                            </picture>
                        </div>
                    </div>
                </div>
                <div class="relative mt-12 sm:mt-16 lg:mt-24">
                    <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div class="col-start-1">
                            <h4 class="text-2xl leading-8 font-extrabold text-cool-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                                Testing can be more productive
                            </h4>
                            <p class="mt-3 text-lg leading-7 text-cool-gray-500">
                                Pest makes testing a breeze. Tests are easy to read and understand. Also, it's powered
                                by PHPUnit — just run your current PHPUnit test suite with Pest and it will just work.
                                You won't have to change a thing.
                            </p>
                        </div>
                        <div class="mt-10 -mx-4 relative lg:mt-0 col-start-2">
                            <div class="bg-pest absolute top-0 right-0 -mt-12 hidden lg:block"
                                 style="z-index: 0; width: 400px; height: 531px; opacity: 10%">
                            </div>
                            <picture>
                                <source srcset="/assets/img/webp/test.webp" type="image/webp">
                                <source srcset="/assets/img/test.png" type="image/png">
                                <img class="relative mx-auto" width="490" src="/assets/img/test.png" alt=""/>
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-12 bg-cool-gray-50 overflow-hidden md:pt-14 lg:pt-24">
            <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="relative">
                    <blockquote class="mt-4">
                        <div
                            class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-cool-gray-900 text-raleway">
                            <p>
                                &ldquo;Pest is minimal, distraction-free, and a joy to use.&rdquo;
                            </p>
                        </div>
                        <footer class="mt-8">
                            <div class="md:flex md:items-center md:justify-center">
                                <div class="md:flex-shrink-0">
                                    <img class="mx-auto h-10 w-10 rounded-full" src="/assets/img/taylor.jpg" alt=""/>
                                </div>
                                <div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                                    <div class="text-base leading-6 font-medium text-cool-gray-900">Taylor Otwell</div>
                                    <svg style="color: #ff89ff" class="hidden md:block mx-1 h-5 w-5 text-purple-600"
                                         fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M11 0h3L9 20H6l5-20z"/>
                                    </svg>
                                    <div class="text-base leading-6 font-medium text-cool-gray-500">Creator of Laravel
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>
        <div class="py-12 bg-cool-gray-50 overflow-hidden md:py-20 lg:py-24">
            <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="relative">
                    <blockquote class="mt-4">
                        <div
                            class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-cool-gray-900 text-raleway">
                            <p>
                                &ldquo;I wouldn’t be surprised if Pest becomes the default test runner in PHP for the
                                near future.&rdquo;
                            </p>
                        </div>
                        <footer class="mt-8">
                            <div class="md:flex md:items-center md:justify-center">
                                <div class="md:flex-shrink-0">
                                    <img class="mx-auto h-10 w-10 rounded-full" src="/assets/img/freek.jpg" alt=""/>
                                </div>
                                <div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                                    <div class="text-base leading-6 font-medium text-cool-gray-900">Freek Van der
                                        Herten
                                    </div>
                                    <svg style="color: #ff89ff" class="hidden md:block mx-1 h-5 w-5 text-purple-600"
                                         fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M11 0h3L9 20H6l5-20z"/>
                                    </svg>
                                    <div class="text-base leading-6 font-medium text-cool-gray-500">Package Creator at
                                        Spatie
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>
        <div class="bg-white">
            <div class="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
                <h2 class="text-3xl leading-9 font-extrabold text-cool-gray-900 text-center">
                    Commonly asked questions
                </h2>
                <div class="mt-6 border-t-2 border-cool-gray-100 pt-10">
                    <div class="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <div>
                                <dl>
                                    <dt class="text-lg leading-6 font-medium text-cool-gray-900">
                                        Is Pest Laravel specific?
                                    </dt>
                                    <dd class="mt-2">
                                        <p class="text-base leading-6 text-cool-gray-500">
                                            No — Pest is framework agnostic and it can be used in any PHP
                                            project. This project contains several Laravel examples
                                            just because the author has a close relationship with
                                            the Laravel community.
                                        </p>
                                    </dd>
                                </dl>
                            </div>
                            <div class="mt-12">
                                <dl>
                                    <dt class="text-lg leading-6 font-medium text-cool-gray-900">
                                        Why should I use Pest?
                                    </dt>
                                    <dd class="mt-2">
                                        <p class="text-base leading-6 text-cool-gray-500">
                                            To make your life easier. Pest is a testing framework built for humans —
                                            it's simple,
                                            minimal, and elegant. Writing tests doesn't have to be complicated.
                                        </p>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <div class="mt-12 md:mt-0">
                            <div>
                                <dl>
                                    <dt class="text-lg leading-6 font-medium text-cool-gray-900">
                                        Can I use my current PHPUnit Test Case classes?
                                    </dt>
                                    <dd class="mt-2">
                                        <p class="text-base leading-6 text-cool-gray-500">
                                            Yes — Pest is a progressive testing framework! You can have both PHPUnit
                                            test classes and Pest test files in the
                                            same test suite. Also, you can reuse your Test Case classes in Pest test
                                            files.
                                        </p>
                                    </dd>
                                </dl>
                            </div>
                            <div class="mt-12">
                                <dl>
                                    <dt class="text-lg leading-6 font-medium text-cool-gray-900">
                                        Is Pest open source?
                                    </dt>
                                    <dd class="mt-2">
                                        <p class="text-base leading-6 text-cool-gray-500">
                                            Yes — Pest was created by <a href="https://twitter.com/enunomaduro">Nuno
                                                Maduro</a> under the <a href="https://github.com/sponsorware/docs">Sponsorware
                                                license</a>. It
                                            got open-sourced early this year and is now licensed under the <a
                                                href="https://opensource.org/licenses/MIT">MIT license</a>.
                                        </p>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white  mb-12">
            <div class="max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                <div style="background-color: #483786"
                     class="px-6 py-6 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
                    <div class="xl:w-0 xl:flex-1">
                        <h2 class="text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9">
                            Get the latest updates!
                        </h2>
                        <p class="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
                            Subscribe to our newsletter and stay updated on the latest developments.
                        </p>
                    </div>
                    <div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                        <div id="mc_embed_signup">
                            <form class="sm:flex validate"
                                  action="https://nunomaduro.us12.list-manage.com/subscribe/post?u=d5f11957aceb28cf3e4c30788&amp;id=0d8aed1043"
                                  method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
                                  target="_blank" novalidate>
                                <input
                                    class="appearance-none w-full px-5 py-3 border border-transparent text-base leading-6 rounded-md text-cool-gray-900 bg-white placeholder-cool-gray-500 focus:outline-none focus:placeholder-cool-gray-400 transition duration-150 ease-in-out"
                                    placeholder="Enter your email"
                                    type="email" value="" aria-label="Email address" name="EMAIL" class="required email"
                                    id="mce-EMAIL" required>
                                <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                    <button type="submit" id="mc-embedded-subscribe"
                                            class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400 transition duration-150 ease-in-out">
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                            <div id="mce-responses">
                                <p class="mt-3 text-sm leading-5 text-indigo-200" id="mce-error-response"
                                   style="display:none"></p>
                                <p class="mt-3 text-sm leading-5 text-indigo-200" id="mce-success-response"
                                   style="display:none"></p>
                            </div>
                        </div>
                        <!--End mc_embed_signup-->

                    </div>
                </div>
            </div>
            <div class="mt-8">
                <p class="text-center text-base leading-6 text-cool-gray-400">
                    &copy; 2020 Pest
                </p>
            </div>
        </div>
        <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
        <script type='text/javascript'>(function ($) {
                window.fnames = new Array();
                window.ftypes = new Array();
                fnames[0] = 'EMAIL';
                ftypes[0] = 'email';
            }(jQuery));
            var $mcj = jQuery.noConflict(true);</script>
    </section>
</x-app-layout>
