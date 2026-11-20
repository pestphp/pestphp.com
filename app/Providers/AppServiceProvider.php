<?php

namespace App\Providers;

use App\Contracts\MarkdownStyler;
use App\Support\MarkdownStylers\TorchlightMarkdownStyler;
use Illuminate\Foundation\DevCommands;
use Illuminate\Support\Collection;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton(MarkdownStyler::class, fn () => new TorchlightMarkdownStyler);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->configureDevCommands();

        Collection::macro('recursive', function () {
            return $this->map(function ($value) {
                if (is_array($value) || is_object($value)) {
                    return collect($value)->recursive();
                }

                return $value;
            });
        });
    }

    /**
     * Configure the processes started by `composer dev`.
     */
    private function configureDevCommands(): void
    {
        // Queues run synchronously, so there is no worker to start.
        DevCommands::except('queue');

        // The landing page at `/` is a standalone Vite project (resources/www).
        DevCommands::register('npm --prefix resources/www run dev', 'www')->pink();

        DevCommands::order(['server', 'vite', 'www', 'logs']);
    }
}
