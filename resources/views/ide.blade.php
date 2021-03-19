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
                        <x-ide-plugin
                            title="PHPStorm"
                            :installs="$jetbrains"
                            logo="https://upload.wikimedia.org/wikipedia/commons/c/c9/PhpStorm_Icon.svg"
                            url="https://plugins.jetbrains.com/plugin/14636-pest"
                            github="https://github.com/pestphp/pest-intellij">
                        </x-ide-plugin>

                        <x-ide-plugin
                            title="VSCode"
                            :installs="$visualStudio"
                            logo="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
                            url="https://marketplace.visualstudio.com/items?itemName=m1guelpf.better-pest"
                            github="https://github.com/m1guelpf/better-pest">
                        </x-ide-plugin>
                    </div>
                </div>
            </div>
        </section>
    </main>
</x-app-layout>
