<nav x-cloak class="hidden lg:block mt-1"
	:class="{ 'block lg:block': isOpen === true, 'hidden lg:block': isOpen === false }"
	x-transition:enter="transition-all ease-in-out duration-700"
	x-transition:enter-start="-left-full"
	x-transition:enter-end="left-0"
	x-transition:leave="transition-all ease-in-out duration-700"
	x-transition:leave-start="top-0"
	x-transition:leave-end="-top-full">

	<div class="lg:sticky lg:w-56 xl:w-64 lg:px-0 lg:top-0 overflow-y-auto bg-white lg:h-screen fixed left-0 top-nav z-50 overflow-x-auto text-left h-full px-4 h-screen-24 w-full"
	x-ref="dialog" x-on:keydown.escape.window="close()">
		<div class="pt-4 pb-6 lg:pr-4 xl:pl-0 docs-nav">
			{{ $slot }}
		</div>
	</div>
</nav>
