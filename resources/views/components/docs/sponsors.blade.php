<aside class="hidden lg:block">
    <div class="lg:top-15.5 overflow-y-auto px-5 py-8 lg:sticky lg:h-[calc(100vh-3.875rem)]">
        <div class="text-2xs mb-4 flex items-center gap-2.5 font-mono font-bold uppercase tracking-widest text-zinc-500">
            <span class="text-rose-500">//</span> partners
        </div>

        <ul class="grid grid-cols-2 gap-2.5" x-data="{
            sponsors: [
                { href: 'https://jb.gg/nuno', img: '/www/assets/sponsors/phpstorm.svg', class: 'h-6 w-auto', tier: 1 },
                { href: 'https://coderabbit.link/nunomaduro', img: '/www/assets/sponsors/coderabbit.svg', class: 'h-6 w-auto', tier: 1 },
                { href: 'https://serpapi.com/?ref=nunomaduro', img: '/www/assets/sponsors/serpapi.png', class: 'h-6 w-auto', tier: 1 },
                { href: 'https://bentonow.com/?ref=nunomaduro', img: '/www/assets/sponsors/bento.svg', class: 'h-5 w-auto', tier: 1 },
                { href: 'https://cmsmax.com/?ref=nunomaduro', img: '/www/assets/sponsors/cmsmax.png', class: 'h-6 w-auto', tier: 1 },
                { href: 'https://redberry.international/laravel-development/?utm_source=pest&utm_medium=banner&utm_campaign=pest_sponsorship', img: '/www/assets/sponsors/redberry.png', class: 'h-5 w-auto', tier: 1 },
                { href: 'https://typesense.org/?ref=nunomaduro', img: '/www/assets/sponsors/typesense.svg', class: 'h-7 w-auto', tier: 1 },
                { href: 'https://zapiet.com/?ref=nunomaduro', img: '/www/assets/sponsors/zapiet.svg', class: 'h-6 w-auto', tier: 2 },
                { href: 'https://loadforge.com/?ref=nunomaduro', img: '/www/assets/sponsors/loadforge.svg', class: 'h-4 w-auto', tier: 2 },
                { href: 'https://route4me.com/?ref=nunomaduro', img: '/www/assets/sponsors/route4me.svg', class: 'h-6 w-auto', tier: 2 },
                { href: 'https://getnerdify.com/?ref=nunomaduro', img: '/www/assets/sponsors/nerdify.png', class: 'h-9 w-auto', tier: 2 }
            ],
            shuffledSponsors: [],
            shuffle(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
                return array;
            },
            init() {
                this.shuffledSponsors = [
                    ...this.shuffle(this.sponsors.filter(s => s.tier === 1)),
                    ...this.shuffle(this.sponsors.filter(s => s.tier === 2))
                ];
            }
        }" x-init="init()">
            <template :key="sponsor.img" x-for="sponsor in shuffledSponsors">
                <li :class="sponsor.tier === 1 ? 'col-span-2' : ''">
                    <a :href="sponsor.href" class="active:scale-96 flex h-16 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800 px-3 transition-[border-color,scale] hover:border-zinc-200/20" rel="noopener" target="_blank">
                        <img :class="sponsor.class" :src="sponsor.img" class="max-w-full object-contain" loading="lazy" />
                    </a>
                </li>
            </template>
        </ul>

        <a class="active:scale-96 text-2xs mt-2.5 flex h-11 items-center justify-center rounded-xl border border-dashed border-zinc-700 font-mono uppercase tracking-widest text-zinc-500 transition-colors hover:border-zinc-200/20 hover:text-zinc-300" href="https://github.com/sponsors/nunomaduro" rel="noopener" target="_blank">
            Your logo here
        </a>
    </div>
</aside>
