<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use Symfony\Component\HttpFoundation\Response;

class AddLlmsTxtHeader
{
    public function handle(Request $request, Closure $next): Response
    {
        $baseUrl = 'https://pestphp.com';
        $rootLlmsTxt = "{$baseUrl}/llms.txt";

        if (preg_match('#^docs/([^/]+)$#', $request->path(), $matches)) {
            $pageLlmsTxt = "{$baseUrl}/docs/{$matches[1]}/llms.txt";
        }

        View::share('llmsTxt', $pageLlmsTxt ?? $rootLlmsTxt);

        $response = $next($request);

        $response->headers->set('X-Llms-Txt', $rootLlmsTxt);
        $response->headers->set('Link', '<'.($pageLlmsTxt ?? $rootLlmsTxt).'>; rel="alternate"; type="text/plain"', false);

        return $response;
    }
}
