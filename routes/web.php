<?php

use App\Http\Controllers\BrandController;
use App\Http\Controllers\DocsController;
use App\Http\Controllers\IDEPluginsController;
use App\Http\Controllers\LlmsTxtController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group([
    //
], function () {
    Route::get('/', function (Illuminate\Http\Request $request) {
        if ($request->accepts(['text/markdown', 'text/plain']) && ! $request->accepts(['text/html'])) {
            return app(LlmsTxtController::class)->index();
        }

        return file_get_contents(public_path('www/index.html'));
    });

    Route::get('/llms.txt', [LlmsTxtController::class, 'index']);
    Route::get('/llms-full.txt', [LlmsTxtController::class, 'full']);

    Route::get('/brand', BrandController::class)->name('brand');

    Route::get('/docs/editor-setup', IDEPluginsController::class)->name('ide-plugins');
    Route::get('/docs/{page}/llms.txt', [LlmsTxtController::class, 'page']);
    Route::get('/docs/{page}.md', [LlmsTxtController::class, 'page']);
    Route::get('/docs/{page?}', DocsController::class)->name('docs')->where('page', '.*');
});
