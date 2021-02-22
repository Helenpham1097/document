<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Statamic\Statamic;
use Statamic\StaticSite\Generator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(Generator $ssg)
    {
        $ssg->after(function () {
//            rename(storage_path('app/static/blog/feed/index.html'),storage_path('app/static/blog/feed/index.xml'));
        });
    }
}
