<x-app-layout layout="app" title='IDE plugins' description="Pest has IDE plugins for PhpStorm and VSCode.">
    <main role="main" class="w-full flex-auto">
        <section class="documentation">
            <div class="max-w-5xl mx-auto px-4 lg:px-4 xl:px-6 lg:flex lg:flex-row">

                <x-docs.sidebar>
                    {!! $index !!}
                </x-docs.sidebar>

                <div class="docs-main max-w-prose DocSearch-content mx-auto lg:mr-0 relative w-full px-3 lg:px-0 mt-6 mb-20">
                    <div class="w-100 lg:block absolute top-0 right-0 hidden h-8 mt-2 text-sm">
                        <a href="https://github.com/pestphp/pestphp.com/edit/next/resources/views/ide.blade.php">
                            Edit this page →
                        </a>
                    </div>

                    <h1>Editor Setup</h1>

                    <p>
                        An editor plugin can enhance your experience when working with Pest. While most editors offer built-in support for Pest, a dedicated plugin adds helpful functionality on top of your editor, streamlining your workflow.
                    </p>

                    <p>
                        Currently, the PhpStorm team at JetBrains maintains the Pest plugin for PhpStorm, which has been installed by default since PhpStorm 2023.3.
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
                        If you do not use PhpStorm, you may wish to try one of the community-maintained plugins below. However, these alternatives may not offer the same experience as the official PhpStorm plugin.
                    </p>

                    <div class="space-y-6 mt-6">
                        <x-vs-code-ide-plugin
                            title="VSCode PHPUnit TestExplorer"
                            extension="recca0120.vscode-phpunit"
                            logo="https://raw.githubusercontent.com/recca0120/vscode-phpunit/main/img/icon.png"
                            url="https://marketplace.visualstudio.com/items?itemName=recca0120.vscode-phpunit"
                            github="https://github.com/recca0120/vscode-phpunit">
                        </x-vs-code-ide-plugin>
                        
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
                            url="https://github.com/V13Axel/neotest-pest"
                            github="https://github.com/V13Axel/neotest-pest">
                        </x-ide-plugin>
                    </div>

                    {!! $body !!}
                </div>
            </div>
        </section>
    </main>
</x-app-layout>
