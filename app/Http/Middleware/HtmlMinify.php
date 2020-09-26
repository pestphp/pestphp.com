<?php

namespace App\Http\Middleware;

use Closure;
use voku\helper\HtmlMin;
use Illuminate\Http\Request;

class HtmlMinify
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param Closure                 $next
     *
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        $html = (new HtmlMin())
            ->doOptimizeViaHtmlDomParser()
            ->doRemoveComments()
            ->doSortCssClassNames()
            ->minify($response->getContent());

        return $response->setContent($html);
    }
}
