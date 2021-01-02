<div class="mt-6 mb-2">
    <h3 class="px-3 mb-0 text-xs leading-4 font-bold text-gray-400 uppercase tracking-wider">
        {{ $series->title }}
    </h3>
</div>

@foreach ($series->screencasts as $screencast)
<div class="mt-1">
    <a href='{{ route("screencasts", $screencast->slug) }}'
    class='{{ is_current_url(secure_url("screencasts/{$screencast->slug}")) ? "bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold" : "" }} group font-system font-normal flex items-center px-3 py-1.5 text-sm leading-5 text-gray-500 rounded-md hover:text-gray-900 hover:bg-gray-300 focus:bg-gray-300 transition ease-in-out duration-150'>
        <span class="truncate">
            {{ $screencast->title }}
        </span>
    </a>
</div>
@endforeach