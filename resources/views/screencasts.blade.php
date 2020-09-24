<x-app-layout :title='$screencast->title. " | Screencasts"' layout="app">
    <main role="main" class="w-full flex-auto">
        <div class="max-w-8xl mx-auto px-4 lg:px-4 xl:px-6 lg:flex lg:flex-row">

            <x-screencasts.sidebar.menu></x-screencasts.sidebar.menu>

            <div class="relative w-full px-3 lg:ml-10 xl:ml-16 lg:px-0 mt-10 mb-20">
                <div
                    class="container mx-auto px-4 lg:px-12 pt-4 text-xl flex-col lg:flex-row flex justify-between relative items-center"
                    style="max-width: 900px">
                    <div class="pb-16 pt-6 w-full" x-data="">
                        <div class="rounded overflow-hidden shadow-lg">
                            <div class="relative" style="padding:56.25% 0 0 0;position:relative;">
                                @if (!$screencast->is_paid)
                                    <iframe src="{{ $screencast->url }}"
                                            style="position:absolute;top:0;left:0;width:100%;height:100%;"
                                            frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                                @else
                                    @include('_partials.screencasts.sponsors-only')
                                @endif
                            </div>
                            <div class="px-4 py-6 bg-white">
                                <span class="block border-b-2 font-bold font-display mb-3 text-2xl">
                                    {{ $screencast->title }}
                                </span>
                                <span class="block leading-5 text-sm tracking-normal">
                                    {{ $screencast->description }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    @push('scripts')
        <script src="https://player.vimeo.com/api/player.js"></script>
        <script>
            var iframe = document.querySelector('iframe');
            var player = new Vimeo.Player(iframe);
            if (localStorage.getItem('pestphp.screencasts.rate')) {
                player.setPlaybackRate(localStorage.getItem('pestphp.screencasts.rate'))
            }
            // Automatically send the user to the next video after completion.
            player.on('ended', function () {
                // Don't go the next link if there is none
                if (@json(! $screencast->next)) return;
                location.href = '/screencasts/{{ optional($screencast->next)->slug }}';
            });
            // Remember the user's PlaybackRate.
            player.on('playbackratechange', function () {
                player.getPlaybackRate().then(function (rate) {
                    localStorage.setItem('pestphp.screencasts.rate', rate)
                })
            })
        </script>
    @endpush
</x-app-layout>
