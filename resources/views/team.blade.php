<x-app-layout layout="app" title="Meet the Team">
    <main role="main" class="w-full flex-auto">
        <section class="documentation">
            <div class="max-w-8xl mx-auto px-4 lg:px-4 xl:px-6 lg:flex lg:flex-row">

                <x-docs.sidebar>
                    {!! $index !!}
                </x-docs.sidebar>

                <div class="relative docs-main DocSearch-content w-full px-3 lg:ml-10 xl:ml-16 lg:px-0 mt-10 mb-20">
                    <div class="absolute top-0 right-0 h-8 w-100 lg:mt-12 xl:mt-12 hidden lg:block">
                        <a href="https://github.com/pestphp/pestphp.com-next/edit/main/resources/views/team.blade.php">Edit this page →</a>
                    </div>

                    <h1>Meet the team</h1>

                    <blockquote>
                        <p><strong>Hey!</strong> You like Pest and want to be part of the team?
                            <br>Reach out to us on <a href="https://discord.com/invite/bMAJv82">Discord</a> if you can help with any of
                            the following:</p>
                    </blockquote>

                    {{-- <div id="open-positions">
                        <ul class="list-inside text-lg">
                            <li>Discord Moderator</li>
                        </ul>
                    </div> --}}

                    @foreach($teams['teams'] as $team)
                        <div class="mt-20">
                            <div class="mb-20">
                                <h2>{{ $team["name"] }}</h2>
                                <p class="text-gray-700 text-lg">{{ $team["description"] }}</p>
                            </div>

                            <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 gap-y-16">
                                @foreach($team["contributors"] as $contributor)
                                    <x-team-card :contributor="$contributor"></x-team-card>
                                @endforeach
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </section>
    </main>
</x-app-layout>
