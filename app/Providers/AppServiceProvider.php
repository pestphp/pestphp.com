<?php

namespace App\Providers;

use App\Contracts\MarkdownStyler;
use App\Support\MarkdownStylers\SpatieMarkdownStyler;
use App\Support\MarkdownStylers\TorchlightMarkdownStyler;
use Illuminate\Support\Collection;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(MarkdownStyler::class, function() {
            if (config('torchlight.token')) {
                return new TorchlightMarkdownStyler();
            }

            return new SpatieMarkdownStyler();
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Collection::macro('recursive', function () {
            return $this->map(function ($value) {
                if (is_array($value) || is_object($value)) {
                    return collect($value)->recursive();
                }
                return $value;
            });
        });
    }
}
