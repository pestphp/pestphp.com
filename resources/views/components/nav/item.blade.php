@if (is_string($item))
    <div class="mt-1">
        <a href="{{ url($item) }}" class="{{ is_current_url(url($item)) ? 'bg-cool-gray-200 hover:bg-cool-gray-300 text-cool-gray-700 font-semibold' : '' }} group font-system font-normal flex items-center px-3 py-1.5 text-sm leading-5 text-cool-gray-500 rounded-md hover:text-cool-gray-900 hover:bg-cool-gray-300 focus:bg-cool-gray-300 transition ease-in-out duration-150">
            <span class="truncate">
                {{ $label }}
            </span>
        </a>
    </div>
@else
    <div class="mt-8 mb-2">
        <h3 class="px-3 mb-0 text-xs leading-4 font-bold text-cool-gray-400 uppercase tracking-wider">
          {{ $label }}
        </h3>
    </div>
@endif

@if (! is_string($item) && $item['children'])
    @foreach ($item['children'] as $label => $item)
        <x-nav.item :item="$item" :label="$label" :level="++$level"></x-nav.item>
    @endforeach
@endif
