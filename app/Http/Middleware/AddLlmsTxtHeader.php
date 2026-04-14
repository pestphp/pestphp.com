<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AddLlmsTxtHeader
{
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        $baseUrl = 'https://pestphp.com';

        $response->headers->set('X-Llms-Txt', "{$baseUrl}/llms.txt");

        if (preg_match('#^docs/([^/]+)$#', $request->path(), $matches)) {
            $page = $matches[1];
            $response->headers->set('Link', "<{$baseUrl}/docs/{$page}/llms.txt>; rel=\"alternate\"; type=\"text/plain\"", false);
        } else {
            $response->headers->set('Link', "<{$baseUrl}/llms.txt>; rel=\"llms-txt\"; type=\"text/plain\"", false);
        }

        return $response;
    }
}
