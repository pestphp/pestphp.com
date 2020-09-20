<x-app-layout layout="docs" :title='"{$matter["title"]} | ".config("site.name")'>
	<div class="absolute top-0 right-0 h-8 w-100 lg:mt-12 xl:mt-12 hidden lg:block">
		<a href="https://github.com/pestphp/docs/edit/master/{{ $page }}.md">Edit this page →</a>
	</div>
	{!! $body !!}
</x-app-layout>