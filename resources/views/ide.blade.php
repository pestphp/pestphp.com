<x-app-layout description="Pest has IDE plugins for PhpStorm and VSCode." layout="app" title='IDE plugins'>
    <main class="w-full flex-auto" role="main">
        <div class="relative mx-auto min-h-[70vh] max-w-7xl border-x border-zinc-700">
            <div class="top-14.25 pointer-events-none fixed inset-x-0 z-10">
                <div class="relative mx-auto max-w-7xl">
                    <span class="crosshair -left-1 top-px"></span>
                    <span class="crosshair -right-1 top-px"></span>
                </div>
            </div>
            <span class="crosshair -left-1.25 -bottom-1.25"></span>
            <span class="crosshair -right-1.25 -bottom-1.25"></span>
            <span class="crosshair -bottom-1.25 left-59 hidden lg:block"></span>
            <span class="crosshair -bottom-1.25 right-59 hidden lg:block"></span>

            <div class="lg:grid lg:grid-cols-[15rem_minmax(0,1fr)_15rem]">
                <x-docs.sidebar>{!! $index !!}</x-docs.sidebar>

                <div class="min-w-0 px-5 py-10 sm:px-10 lg:border-x lg:border-zinc-700">
                    <div class="mb-8 flex items-center gap-2.5 font-mono text-xs tracking-widest text-zinc-500">
                        <span class="font-bold text-rose-500">//</span>
                        <span>docs</span>
                        <span class="text-zinc-600">/</span>
                        <span class="text-zinc-400">editor-setup</span>
                        <a class="ml-auto hidden text-zinc-400 underline-offset-4 hover:text-rose-400 hover:underline lg:inline" href="https://github.com/pestphp/pestphp.com/edit/next/resources/views/ide.blade.php" rel="noopener" target="_blank">edit this page →</a>
                    </div>

                    <article class="docs-main prose prose-invert max-w-none">
                        <h1>Editor Setup</h1>

                        <p>
                            An editor plugin can enhance your experience when working with Pest. While most editors offer built-in support for Pest, a dedicated plugin adds helpful functionality on top of your editor, streamlining your workflow.
                        </p>

                        <p>
                            Currently, the PhpStorm team at JetBrains maintains the Pest plugin for PhpStorm, which has been installed by default since PhpStorm 2023.3.
                        </p>

                        <div class="mb-12 mt-6">
                            <x-jetbrains-ide-plugin github="https://github.com/pestphp/pest-intellij" logo="https://upload.wikimedia.org/wikipedia/commons/c/c9/PhpStorm_Icon.svg" plugin-id="14636" title="PhpStorm" url="https://plugins.jetbrains.com/plugin/14636-pest">
                            </x-jetbrains-ide-plugin>
                        </div>

                        <p>
                            If you do not use PhpStorm, you may wish to try one of the community-maintained plugins below. However, these alternatives may not offer the same experience as the official PhpStorm plugin.
                        </p>

                        <div class="mt-6 space-y-6">
                            <x-vs-code-ide-plugin extension="recca0120.vscode-phpunit" github="https://github.com/recca0120/vscode-phpunit" logo="https://raw.githubusercontent.com/recca0120/vscode-phpunit/main/img/icon.png" title="VSCode PHPUnit TestExplorer" url="https://marketplace.visualstudio.com/items?itemName=recca0120.vscode-phpunit">
                            </x-vs-code-ide-plugin>

                            <x-vs-code-ide-plugin extension="m1guelpf.better-pest" github="https://github.com/m1guelpf/better-pest" logo="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" title="VSCode" url="https://marketplace.visualstudio.com/items?itemName=m1guelpf.better-pest">
                            </x-vs-code-ide-plugin>

                            <x-vs-code-ide-plugin extension="dansysanalyst.pest-snippets" github="https://github.com/dansysanalyst/pest-snippets" logo="https://raw.githubusercontent.com/dansysanalyst/pest-snippets/main/images/icon.png" title="VSCode Snippets" url="https://marketplace.visualstudio.com/items?itemName=dansysanalyst.pest-snippets">
                            </x-vs-code-ide-plugin>

                            <x-neovim-ide-plugin github="https://github.com/V13Axel/neotest-pest" logo="https://upload.wikimedia.org/wikipedia/commons/3/3a/Neovim-mark.svg" title="Neovim (via Neotest)" url="https://github.com/V13Axel/neotest-pest">
                                </x-ide-plugin>
                        </div>

                        {!! $body !!}
                    </article>
                </div>

                <x-docs.sponsors />
            </div>
        </div>
    </main>
</x-app-layout>
