<nav x-cloak class="hidden lg:block"
	:class="{ 'block lg:block': isOpen === true, 'hidden lg:block': isOpen === false }"
	x-transition:enter="transition-all ease-in-out duration-700"
	x-transition:enter-start="-left-full"
	x-transition:enter-end="left-0"
	x-transition:leave="transition-all ease-in-out duration-700"
	x-transition:leave-start="top-0"
	x-transition:leave-end="-top-full">

	<div
		class="
			lg:w-48 xl:w-56 lg:h-screen mt-1 h-full px-4 lg:px-0 w-full
			lg:mt-8
			fixed lg:relative left-0 z-50
			overflow-y-auto lg:overflow-y-clip overflow-x-auto lg:overflow-x-clip
			bg-white lg:bg-transparent dark:bg-gray-900 lg:dark:bg-transparent text-left
		"
		x-ref="dialog"
		x-on:keydown.escape.window="close()"
	>
		<div class="pb-6 lg:pr-4 xl:pl-0 docs-nav">
			{{ $slot }}
		</div>
	</div>
</nav>
