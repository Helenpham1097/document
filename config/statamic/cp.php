<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Control Panel
    |--------------------------------------------------------------------------
    |
    | Whether the Control Panel should be enabled, and through what route.
    |
    */

    'enabled' => env('CP_ENABLED', true),

    'route' => env('CP_ROUTE', 'cp'),

    /*
    |--------------------------------------------------------------------------
    | Start Page
    |--------------------------------------------------------------------------
    |
    | When a user logs into the Control Panel, they will be taken here.
    | For example: "dashboard", "collections/pages", etc.
    |
    */

    'start_page' => 'dashboard',

    /*
    |--------------------------------------------------------------------------
    | Dashboard Widgets
    |--------------------------------------------------------------------------
    |
    | Here you may define any number of dashboard widgets. You're free to
    | use the same widget multiple times in different configurations.
    |
    */

    'widgets' => [
        [
            'type' => 'collection',
            'collection' => 'blog',
            'width' => 50
        ],
        [
            'type' => 'collection',
            'collection' => 'pages',
            'width' => 50
        ],
        [
            'type' => 'images_missing_alt', // Required
            'container' => 'assets', // Default: "assets" – The container to search through. Can also be an array to include multiple containers.
            'limit' => 10, // Default: 5 – The number of images to display in the widget.
            'width' => 50, // Default: 100 – The size of the widget.
        ],
        [
            'type' => 'unused-assets', // Required
            'limit' => 300, // Default: 300 – The number of images to display from the widget.
            'width' => 50, // Default: 100 – The size of the widget.
            'excluded_paths' => [], // Example: ['assets/myFolder/'] - Default: [] – The paths to exclude from the search.
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Date Format
    |--------------------------------------------------------------------------
    |
    | When a date is encountered throughout the Control Panel, it will be
    | rendered in the following format. Any PHP date variables are permitted.
    |
    */

    'date_format' => 'Y-m-d',

    /*
    |--------------------------------------------------------------------------
    | Pagination
    |--------------------------------------------------------------------------
    |
    | The numbers of items to show on each paginated page.
    |
    */

    'pagination_size' => 50,

    /*
    |--------------------------------------------------------------------------
    | Links to Documentation
    |--------------------------------------------------------------------------
    |
    | Show contextual links to documentation throughout the Control Panel.
    |
    */

    'link_to_docs' => true,

];
