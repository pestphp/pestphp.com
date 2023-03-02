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
			lg:w-48 xl:w-56 lg:h-screen w-full
			lg:mt-8
			fixed lg:relative top-0 left-0 z-50
			h-screen lg:h-auto
			bg-white dark:bg-gray-800 bg-pattern lg:!bg-transparent lg:!bg-none
			pt-16 lg:pt-0
			text-left
		"
		x-ref="dialog"
		x-on:keydown.escape.window="close()"
	>
		<div class="
			docs-nav h-full
			pt-6 lg:pt-0.5 pb-6 px-4 lg:pl-0 lg:pr-4
			overflow-y-auto lg:overflow-y-clip overflow-x-auto lg:overflow-x-clip
		">
			{{ $slot }}
		</div>
	</div>
</nav>
