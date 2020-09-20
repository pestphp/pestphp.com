<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DocsController;
use App\Http\Controllers\TeamController;

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/docs/team', TeamController::class)->name('team');

// Route::get('/screencasts', function () {
// 	return view('screencasts');
// })->name('screencasts');

Route::get('/docs/{page?}', DocsController::class)->name('docs')->where('page', '.*');

Route::get('/test', function () {
    return is_current_url(url('test'));
});
