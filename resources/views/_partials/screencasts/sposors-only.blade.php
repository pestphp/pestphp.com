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
            <a class="text-sm md:text-base cursor-pointer border-2 border-white flex hover:border-gray-300 hover:text-gray-400 items-center px-4 md:px-8 py-1 md:py-2 rounded-full shadow text-white" href="/login/github">
                <span class="mr-2">
                    Log in with GitHub
                </span>
            </a>
        </div>
        @else
        <div class="mt-4">
            <a class="text-sm md:text-base cursor-pointer border-2 border-white flex hover:border-gray-300 hover:text-gray-400 items-center px-4 md:px-8 py-1 md:py-2 rounded-full shadow text-white" href="https://github.com/sponsors/nunomaduro" target="__blank">
                <span class="mr-4">
                    Become A GitHub Sponsor
                </span>
            </a>
        </div>
        @endif
    </div>
</div>