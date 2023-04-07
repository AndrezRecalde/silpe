<?php

namespace App\Providers;

use App\Interfaces\TramiteInterface;
use App\Repositories\TramiteRepository;
use Illuminate\Support\ServiceProvider;

class TramiteServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(TramiteInterface::class, TramiteRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
