<?php

use App\Http\Controllers\BrandController;
use App\Http\Controllers\DocsController;
use App\Http\Controllers\IDEPluginsController;
use App\Http\Controllers\LlmsTxtController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function (Request $request) {
    if ($request->accepts(['text/markdown', 'text/plain']) && ! $request->accepts(['text/html'])) {
        return app(LlmsTxtController::class)->index();
    }

    // Absolute URLs (og:image, og:url, JSON-LD, …) are authored against the
    // production domain; rewrite them to the serving host so preview
    // deployments (e.g. v5.pestphp.com) scrape their own assets.
    return str_replace(
        'https://pestphp.com',
        rtrim($request->root(), '/'),
        file_get_contents(public_path('www/index.html')),
    );
});

Route::get('/llms.txt', [LlmsTxtController::class, 'index']);
Route::get('/llms-full.txt', [LlmsTxtController::class, 'full']);

Route::get('/brand', BrandController::class)->name('brand');

Route::get('/docs/editor-setup', IDEPluginsController::class)->name('ide-plugins');
Route::get('/docs/{page}/llms.txt', [LlmsTxtController::class, 'page']);
Route::get('/docs/{page}.md', [LlmsTxtController::class, 'page']);
Route::get('/docs/{page?}', DocsController::class)->name('docs')->where('page', '.*');
