@php $level = $level ?? 0 @endphp

<nav id="js-nav-menu" class="nav-menu hidden lg:block mt-0">
	<div class="lg:sticky lg:w-56 xl:w-64 overflow-y-auto h-screen-24 lg:top-16">
		<div class="my-8 lg:pr-4 xl:pl-0">
		@foreach ($items as $label => $item)
			<x-nav.item :item="$item" :label="$label" :level="$level"></x-nav-item>
		@endforeach
		</div>
	</div>
</nav>