<x-app-layout layout="app" title='IDE plugins' description="Pest has IDE plugins for PhpStorm and VSCode.">
    <main role="main" class="w-full flex-auto">
        <section class="documentation">
            <div class="max-w-5xl mx-auto px-4 lg:px-4 xl:px-6 lg:flex lg:flex-row">

                <x-docs.sidebar>
                    {!! $index !!}
                </x-docs.sidebar>

                <div class="docs-main max-w-prose DocSearch-content mx-auto lg:mr-0 relative w-full px-3 lg:px-0 mt-6 mb-20">
                    <div class="w-100 lg:block absolute top-0 right-0 hidden h-8 mt-2 text-sm">
                        <a href="https://github.com/pestphp/pestphp.com-next/edit/main/resources/views/ide.blade.php">
                            Edit this page →
                        </a>
                    </div>

                    <h1>Editor Setup</h1>

                    <p>
                        An editor plugin can significantly enhance the developer experience when working with Pest PHP. Although most editors have built-in support for Pest PHP, plugins can offer additional functionalities that can streamline and simplify the development process.
                    </p>

                    <p>
                        Currently, our team is in charge of maintaining the PHPStorm plugin, which can be easily accessed on Jetstream's Marketplace.
                    </p>

                    <div class="mt-6 mb-12">
                        <x-jetbrains-ide-plugin
                            title="PhpStorm"
                            plugin-id="14636"
                            logo="https://upload.wikimedia.org/wikipedia/commons/c/c9/PhpStorm_Icon.svg"
                            url="https://plugins.jetbrains.com/plugin/14636-pest"
                            github="https://github.com/pestphp/pest-intellij">
                        </x-jetbrains-ide-plugin>
                    </div>

                    <p>
                        In case you do not utilize PHPStorm, you may consider experimenting with the community-maintained plugin. Nevertheless, it's worth noting that this alternative may not offer the same level of user experience as the official PHPStorm plugin.
                    </p>

                    <div class="space-y-6 mt-6">
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
