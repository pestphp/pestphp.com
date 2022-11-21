<x-app-layout layout="app" title='IDE plugins' description="Pest has IDE plugins for PhpStorm and VSCode.">
    <main role="main" class="w-full flex-auto">
        <section class="documentation">
            <div class="max-w-8xl mx-auto px-4 lg:px-4 xl:px-6 lg:flex lg:flex-row">

                <x-docs.sidebar>
                    {!! $index !!}
                </x-docs.sidebar>

                <div class="relative docs-main DocSearch-content w-full px-3 lg:ml-10 xl:ml-16 lg:px-0 mt-10 mb-20">
                    <div class="absolute top-0 right-0 h-8 w-100 lg:mt-12 xl:mt-12 hidden lg:block">
                        <a href="https://github.com/pestphp/pestphp.com-next/edit/main/resources/views/ide.blade.php">
                            Edit this page →
                        </a>
                    </div>

                    <h1>IDE plugins</h1>

                    <p>
                        Pest has IDE plugins for PhpStorm and VSCode.
                    </p>

                    <div class="space-y-12 mt-16">
                        <x-jetbrains-ide-plugin
                            title="PhpStorm"
                            plugin-id="14636"
                            logo="https://upload.wikimedia.org/wikipedia/commons/c/c9/PhpStorm_Icon.svg"
                            url="https://plugins.jetbrains.com/plugin/14636-pest"
                            github="https://github.com/pestphp/pest-intellij">
                        </x-jetbrains-ide-plugin>

                        <x-vs-code-ide-plugin
                            title="VSCode"
                            extension="m1guelpf.better-pest"
                            logo="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
                            url="https://marketplace.visualstudio.com/items?itemName=m1guelpf.better-pest"
                            github="https://github.com/m1guelpf/better-pest">
                        </x-vs-code-ide-plugin>

                        <x-vs-code-ide-plugin
                            title="VSCode Snippets"
                            extension="dansysanalyst.pest-snippets"
                            logo="https://raw.githubusercontent.com/dansysanalyst/pest-snippets/main/images/icon.png"
                            url="https://marketplace.visualstudio.com/items?itemName=dansysanalyst.pest-snippets"
                            github="https://github.com/dansysanalyst/pest-snippets">
                        </x-vs-code-ide-plugin>

                        <x-neovim-ide-plugin
                            title="Neovim (via Neotest)"
                            logo="https://upload.wikimedia.org/wikipedia/commons/3/3a/Neovim-mark.svg"
                            url="https://github.com/theutz/neotest-pest"
                            github="https://github.com/theutz/neotest-pest">
                        </x-ide-plugin>
                    </div>

                    {!! $body !!}
                </div>
            </div>
        </section>
    </main>
</x-app-layout>
