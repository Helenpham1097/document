<?php

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

// Route::statamic('example', 'example-view', [
//    'title' => 'Example'
// ]);

Route::statamic('/blog/feed', 'blog.feed', [
    'content_type' => 'xml',
    'layout' => 'blog/feed_layout'
]);

Route::statamic('/blog/feed/index.xml', 'blog.feed', [
    'content_type' => 'xml',
    'layout' => 'blog/feed_layout'
]);
