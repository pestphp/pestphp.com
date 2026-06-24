<!-- thin border line on the left side -->
<nav class="ml-8 pl-2 lg:block hidden"
    x-transition:enter="transition-all ease-in-out duration-700"
    x-transition:enter-start="-left-full"
    x-transition:enter-end="left-0"
    x-transition:leave="transition-all ease-in-out duration-700"
    x-transition:leave-start="top-0"
    x-transition:leave-end="-top-full">

    <div x-ref="dialog" x-on:keydown.escape.window="close()" class="lg:w-48 xl:w-56 lg:h-screen w-full fixed lg:relative top-0 left-0 z-50 h-screen lg:h-auto bg-white dark:bg-gray-800 bg-pattern lg:!bg-transparent lg:!bg-none pt-16 lg:pt-0 text-left">
        <div class="docs-nav h-full lg:h-auto pt-6 lg:pt-0.5 pb-6 px-4 lg:pl-0 lg:pr-4 overflow-y-auto overflow-x-auto lg:overflow-inherit">
            <h2>Partners</h2>

            <ul
                x-data="{
                    sponsors: [
                        { href: 'https://jb.gg/nuno', img: '/www/assets/sponsors/phpstorm.svg', class: 'w-auto h-10' },
                        { href: 'https://coderabbit.link/nunomaduro', img: '/www/assets/sponsors/coderabbit.svg', class: 'w-auto h-10' },
                        { href: 'https://serpapi.com/?ref=nunomaduro', img: '/www/assets/sponsors/serpapi.png', class: 'w-auto h-10' },
                        { href: 'https://bentonow.com/?ref=nunomaduro', img: '/www/assets/sponsors/bento.svg', class: 'w-auto h-10' },
                        { href: 'https://cmsmax.com/?ref=pestphp', img: '/www/assets/sponsors/cmsmax.png', class: 'w-auto' },
                        { href: 'https://redberry.international/laravel-development/?utm_source=pest&utm_medium=banner&utm_campaign=pest_sponsorship', img: '/www/assets/sponsors/redberry.png', class: 'w-auto' }
                    ],
                    shuffledSponsors: [],
                    init() {
                        let array = [...this.sponsors];
                        for (let i = array.length - 1; i > 0; i--) {
                            const j = Math.floor(Math.random() * (i + 1));
                            [array[i], array[j]] = [array[j], array[i]];
                        }
                        this.shuffledSponsors = array;
                    }
                }"
                x-init="init()"
                class="pb-8 border-b border-white/10 lg:gap-6 drop-shadow lg:px-0 flex flex-wrap items-center justify-center gap-3 px-6"
            >
                <template x-for="sponsor in shuffledSponsors" :key="sponsor.img">
                    <li class="block">
                        <a :href="sponsor.href" target="_blank" rel="noopener" class="table">
                            <img :src="sponsor.img" :class="sponsor.class" />
                        </a>
                    </li>
                </template>
            </ul>

            <ul
                x-data="{
                    sponsors: [
                        { href: 'https://zapiet.com/?ref=pestphp', img: '/www/assets/sponsors/zapiet.svg', class: 'w-auto h-8' },
                        { href: 'https://loadforge.com/?ref=pestphp', img: '/www/assets/sponsors/loadforge.svg', class: 'w-auto h-5' },
                        { href: 'https://route4me.com/?ref=pestphp', img: '/www/assets/sponsors/route4me.svg', class: 'w-auto h-6' },
                        { href: 'https://getnerdify.com/?ref=pestphp', img: '/www/assets/sponsors/nerdify.png', class: 'w-auto h-14' }
                    ],
                    shuffledSponsors: [],
                    init() {
                        let array = [...this.sponsors];
                        for (let i = array.length - 1; i > 0; i--) {
                            const j = Math.floor(Math.random() * (i + 1));
                            [array[i], array[j]] = [array[j], array[i]];
                        }
                        this.shuffledSponsors = array;
                    }
                }"
                x-init="init()"
                class="pb-8 border-b border-white/10 drop-shadow lg:px-0 flex flex-wrap items-center justify-center gap-5 px-6 mt-6"
            >
                <template x-for="sponsor in shuffledSponsors" :key="sponsor.img">
                    <li class="block">
                        <a :href="sponsor.href" target="_blank" rel="noopener" class="table">
                            <img :src="sponsor.img" :class="sponsor.class" />
                        </a>
                    </li>
                </template>
            </ul>
            <div class="mt-8 text-center">
                <a href="https://github.com/sponsors/nunomaduro" target="_blank" class="sm:w-auto focus:outline-none sm:mt-0 w-full px-8 py-2 text-sm font-bold text-white bg-transparent border border-white/50 rounded-lg">
                    Your logo here
                </a>
            </div>
        </div>
    </div>
</nav>
