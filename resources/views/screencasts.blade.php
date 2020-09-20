<x-app-layout :title='"Screencasts | ".config("site.name")' layout="screencasts">
    <div class="container mx-auto px-4 lg:px-12 pt-4 text-xl flex-col lg:flex-row flex justify-between relative items-center" style="max-width: 900px">
        <div class="pb-16 pt-6 w-full" x-data="">
            <div class="rounded overflow-hidden shadow-lg">
                <div class="relative" style="padding:56.25% 0 0 0;position:relative;">
                	@if (!false)
                    <iframe allow="autoplay; fullscreen" allowfullscreen="" data-ready="true" frameborder="0" src="https://player.vimeo.com/video/396617270?autoplay=1" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                    </iframe>
                    @else
                    <div class="absolute inset-0 bg-indigo-100 overflow-hidden">
                        <div class="absolute inset-0 z-0 overflow-hidden" style="
                                transform: scale(1.05);
                                background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url('/img/screencast_freeze_frame.png');
                                filter: blur(4px);
                                -webkit-filter: blur(4px);
                                background-position: center;
                                background-repeat: no-repeat;
                                background-size: cover;
                            ">
                        </div>
                        <div class="flex flex-col justify-center items-center relative z-10 h-full w-full">
                            <div class="font-bold md:mb-8 md:text-3xl text-center text-white">
                                This video is restricted to GitHub sponsors only.
                            </div>
                            <div class="hidden md:block md:mb-8 text-center text-white md:text-xl">
                                Your sponsorship helps make videos like these possible! ❤️
                            </div>
                            @guest
                            <div class="mt-4">
                                <a class="text-sm md:text-base cursor-pointer border-2 border-white flex hover:border-cool-gray-300 hover:text-cool-gray-400 items-center px-4 md:px-8 py-1 md:py-2 rounded-full shadow text-white" href="/login/github">
                                    <span class="mr-2">
                                        Log in with GitHub
                                    </span>
                                </a>
                            </div>
                            @else
                            <div class="mt-4">
                                <a class="text-sm md:text-base cursor-pointer border-2 border-white flex hover:border-gray-300 hover:text-cool-gray-400 items-center px-4 md:px-8 py-1 md:py-2 rounded-full shadow text-white" href="https://github.com/sponsors/calebporzio" target="__blank">
                                    <span class="mr-4">
                                        Become A GitHub Sponsor
                                    </span>
                                    
                                </a>
                            </div>
                            @endif
                        </div>
                    </div>
                    @endif
                </div>
                <div class="px-4 py-6 bg-white">
                    <span class="block border-b-2 font-bold font-display mb-3 text-2xl">
                        Installation
                    </span>
                    <span class="block leading-5 text-sm tracking-normal">
                        Installing Livewire is so simple, this 2.5 minute video feels like overkill. Composer require, and two little lines added to your layout file, and you are fully set up and ready to rumble!
                    </span>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>

@push('scripts')
<script src="https://player.vimeo.com/api/player.js"></script>
<script>
var iframe = document.querySelector('iframe');
var player = new Vimeo.Player(iframe);
if (localStorage.getItem('pestphp.screencasts.rate')) {
    player.setPlaybackRate(localStorage.getItem('pestphp.screencasts.rate'))
}
// Automatically send the user to the next video after completion.
player.on('ended', function() {
    // Don't the next link if there is none
    if (@json(true)) return;
    // location.href = '/screencasts/';
});
// Remember the user's PlaybackRate.
player.on('playbackratechange', function () {
    player.getPlaybackRate().then(function (rate) {
        localStorage.setItem('pestphp.screencasts.rate', rate)
    })
})
</script>
@endpush