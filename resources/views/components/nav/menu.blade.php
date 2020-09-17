@php $level = $level ?? 0 @endphp

<nav class="lg:sticky xl:w-56 overflow-y-auto h-screen-24 lg:top-0">
  <div class="mt-8 lg:pr-4 xl:pl-0">
    @foreach ($items as $label => $item)
        <x-nav.item :item="$item" :label="$label" :level="$level"></x-nav-item>
    @endforeach
  </div>
</nav>
