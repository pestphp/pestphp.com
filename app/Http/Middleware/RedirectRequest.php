<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RedirectRequest
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $path = collect(config('redirects.redirects'))->get($request->path());

        if ($path) {
            return redirect()->to($path, config('redirects.status') ?? 301);
        }

        return $next($request);
    }
}
