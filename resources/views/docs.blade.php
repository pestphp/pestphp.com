@php
use League\CommonMark\CommonMarkConverter;

$converter = new CommonMarkConverter();
@endphp
<x-app-layout layout="docs" :title='"{$matter["title"]} | Pest"'>
	<div class="prose xl:prose-lg">
		{!! $converter->convertToHtml($markdown) !!}
	</div>
</x-app-layout>