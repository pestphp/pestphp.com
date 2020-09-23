<?php

if (! function_exists('is_current_url')) {
    function is_current_url($url)
    {
        return $url == url()->current();
    }
}
