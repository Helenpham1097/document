# Installation
```
git clone git@github.com:webslicehq/webslice-website.git
cd webslice-website
composer install
npm install
gulp
cp .env.example .env && php artisan key:generate
```
If you have not created a user: `php please make:user`. You will need to commit your user to git.


To conviently run locally use [Valet][valet] or [Homestead][homestead] and use [webslice-website.test][siteurl] for the website and [webslice-website.test/cp][cpurl] for the Statamic Control Panel.

[valet]: https://laravel.com/docs/8.x/valet
[Homestead]: https://laravel.com/docs/8.x/homestead
[siteurl]: http://webslice-website.test
[cpurl]: http://webslice-website.test/cp


# Config & Workarounds

This [project ticket](https://gitlab.wsihq.net/serverless/serverless/-/issues/163) might contain useful information, discussions and decisions we made.

### SSG Config
- XML for the RSS feed was not generating properly due to the content-header being set to html rather than xml. 
  Since the production site is going to live in S3 initially, we had to change the file extension from .html to .xml. 
We used a post generation call back to rename blog/feed/index.html to blog/feed/index.xml. 
  See SSG readme https://github.com/statamic/ssg. Once hosted on Webslice, htaccess could be used to change content-header.


- We excluded blog category urls from being generated while there are no templates for these yet. If needed in future these will need to be removed from the exclude array.

### Templates
- We had to create separate partial templates to use while the main website pages are not included. 
  When the rest of the pages are added _main_nav and _main_footer will need to be implemented into the layout.
  
### Pagination
- Pagination is currently disabled in blog/index.antlers.html while it's not supported by SSG https://github.com/statamic/ssg/issues/10. 

### Helpful commands
- Have found these useful when encountering a variety of different errors:
    ```
    php artisan optimize                                            
    php artisan config:cache   
    php artisan route:cache
    ```
- May need to clear routes, views and cache if making changes to them:
    ```
    php artisan route:clear                                         
    php artisan view:clear     
    php artisan cache:clear
    ```

### Staging and Git Integration

- Make sure there is a `.env` file in the project root and configured properly, `.env.example` is a good starting point. To generate `APP_KEY`, run the following command:
    ```
    php artisan key:generate
    ```
- To use the Git integration, we have to add the SSH key to the repository as a [deploy key](https://docs.github.com/en/developers/overview/managing-deploy-keys). Refer to [this comment](https://gitlab.wsihq.net/serverless/serverless/-/issues/163#note_20979) on the project ticket to learn more about setting this up in  SiteHost Cloud Containers using Apache+PHP image.

<hr/>

<p align="center"><img src="https://statamic.com/assets/branding/Statamic-Logo+Wordmark-Rad.svg" width="400" alt="Statamic Logo" /></p>

## About Statamic 3

Statamic 3 is the flat-first, Laravel + Git powered CMS designed for building beautiful, easy to manage websites.

> **Note:** This repository contains the code for the Statamic application. To contribute to the core package, visit the [Statamic core package repository][cms-repo].


## Learning Statamic

Statamic 3 has extensive [documentation][docs]. We dedicate a significant amount of time and energy every day to improving them, so if something is unclear, feel free to open issues for anything you find confusing or incomplete. We are happy to consider anything you feel will make the docs and CMS better.

## Support

We provide official developer support on [Statamic 3 Pro](https://statamic.com/pricing) projects. Community-driven support is available on the [forum](https://statamic.com/forum) and in [Discord][discord].


## Contributing

Thank you for considering contributing to Statamic! We simply ask that you review the [contribution guide][contribution] before you open issues or send pull requests.


## Code of Conduct

In order to ensure that the Statamic community is welcoming to all and generally a rad place to belong, please review and abide by the [Code of Conduct](https://github.com/statamic/cms/wiki/Code-of-Conduct).


## Important Links

- [Statamic Main Site](https://statamic.com)
- [Statamic 3 Documentation][docs]
- [Statamic 3 Core Package Repo][cms-repo]
- [Statamic 3 Migrator](https://github.com/statamic/migrator)
- [Statamic Discord][discord]

[docs]: https://statamic.dev/
[discord]: https://statamic.com/discord
[contribution]: https://github.com/statamic/cms/blob/master/CONTRIBUTING.md
[cms-repo]: https://github.com/statamic/cms
