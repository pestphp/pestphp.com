<?php

use App\Http\Controllers\DocsController;
use App\Http\Controllers\IDEPluginsController;
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

Route::get('/', fn () => file_get_contents(public_path('www/index.html')));

Route::get('/docs/editor-setup', IDEPluginsController::class)->name('ide-plugins');
Route::get('/docs/{page?}', DocsController::class)->name('docs')->where('page', '.*');
