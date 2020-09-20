<?php

if (! function_exists('is_current_url')) {
    /**
     * Add an element to an array using "dot" notation if it doesn't exist.
     *
     */
    function is_current_url($url)
    {
        return $url == url()->current();
    }
}


if (! function_exists('docs_navigation')) {
    /**
     * Add an element to an array using "dot" notation if it doesn't exist.
     *
     */
    function docs_navigation($version = "")
    {
        return (new \App\DocumentationPages)->navigation($version);
    }
}
