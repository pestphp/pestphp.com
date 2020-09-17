@php
use League\CommonMark\CommonMarkConverter;

$converter = new CommonMarkConverter();
@endphp
<x-app-layout layout="docs" :title='"{$matter["title"]} | Pest"'>
	{!! $converter->convertToHtml($markdown) !!}
</x-app-layout>