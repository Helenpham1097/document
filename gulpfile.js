"use strict";

const gulp = require("gulp");
const browsersync = require("browser-sync").create();
const del = require("del");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const purgecss = require('gulp-purgecss');
const rename = require("gulp-rename");
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

// BrowserSync
function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: "./public/"
        },
        port: 3000
    });
    done();
}

// BrowserSync Reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
}

function styles() {
    return gulp
        .src("./resources/css/main.css")
        .pipe(plumber())
        .pipe(postcss())
        .pipe(purgecss({ content: ['./resources/**/*.antlers.html', './resources/**/*.blade.php', './content/**/*.md'], defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [] }))
        .pipe(gulp.dest("./public/css/"))
        .pipe(browsersync.stream());
}

function scripts() {
    return gulp
        .src('resources/js/**/*.js')
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'))
        .pipe(browsersync.stream());
}

function images() {
    return gulp
        .src("./resources/img/**/*")
        .pipe(newer("./public/img"))
        .pipe(
            imagemin([
                imagemin.gifsicle({interlaced: true}),
                imagemin.mozjpeg({quality: 75, progressive: true}),
                imagemin.optipng({optimizationLevel: 5}),
                imagemin.svgo({
                    plugins: [
                        {removeViewBox: true},
                        {cleanupIDs: false}
                    ]
                })
            ])
        )
        .pipe(gulp.dest("./public/img"));
}

function html() {
    return gulp
        .src("./public/**/*.html")
        .pipe(plumber())
        .pipe(browsersync.stream());
}

function clean() {
    return del(['public/css', 'public/js']);
}

// Watch files
function watchFiles() {
    gulp.watch("./resources/css/**/*", styles);
    gulp.watch("./resources/js/**/*", scripts);
    gulp.watch("./resources/img/**/*", images);
    gulp.watch("./public/**/*.html", html);
    gulp.series(browserSyncReload);
}

// define complex tasks
const js = gulp.series(scripts);
const build = gulp.series(clean, gulp.parallel(styles, images, scripts));
const watch = gulp.parallel(watchFiles, browserSync);

// export tasks
exports.images = images;
exports.styles = styles;
exports.scripts = scripts;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = build;
