<x-app-layout layout="docs" :title='"{$matter["title"]} | Pest"'>
{{-- 	<x-slot name="toc">
		<div class="docs-main">
			<div id="toc">
				<x-toc>
					{{ $markdown }}	
				</x-toc>
			</div>
		</div>
	</x-slot> --}}
	
	{!! $body !!}
</x-app-layout>