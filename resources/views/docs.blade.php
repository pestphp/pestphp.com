<x-app-layout layout="docs" :title='"{$matter["title"]} | ".config("site.name")'>
	{!! $body !!}
	<div class="absolute top-0 right-0 h-8 w-100 pt-3 hidden md:block">
		<a href="https://github.com/pestphp/docs/edit/master/{{ $page }}.md">Edit this page →</a>
	</div>
</x-app-layout>