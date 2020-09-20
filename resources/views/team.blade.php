<x-app-layout layout="docs" :title='"Team | ".config("site.name")'>
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
            {{-- <h3 class="text-2xl lg:text-3xl mb-1">{{ dd($team) }}</h3> --}}
            <p class="text-gray-700 text-lg mb-16">{{ $team['description'] }}</p>

            <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 gap-y-16">
                @foreach($team['contributors'] as $contributor)
                    <x-team-card :contributor="$contributor"></x-team-card>
                @endforeach
            </div>
        </div>
    @endforeach
</x-app-layout>
