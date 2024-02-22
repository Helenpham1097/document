"use strict";

const gulp = require("gulp");
const browsersync = require("browser-sync").create();
const del = require("del");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");

function clean() {
	return del(["public/css"]);
}

if (process.env.NODE_ENV === "production") {
	function styles() {
		return gulp.src("./resources/css/main.css").pipe(plumber()).pipe(postcss()).pipe(gulp.dest("public/css"));
	}

	function scripts() {
		return gulp
			.src("./resources/js/*.js")
			.pipe(plumber())
			.pipe(concat("main.js"))
			.pipe(gulp.dest("public/js"))
			.pipe(rename({ suffix: ".min" }))
			.pipe(uglify())
			.pipe(gulp.dest("public/js"));
	}

	const build = gulp.series(clean, gulp.parallel(styles, scripts));
	// export tasks
	exports.build = build;
} else {
	// BrowserSync
	function browserSync(done) {
		browsersync.init({
			proxy: "webslice-website.test",
		});
		done();
	}

	// BrowserSync Reload
	function browserSyncReload(done) {
		browsersync.reload();
		done();
	}

	function html() {
		return gulp.src("./resources/views/**/*").pipe(browsersync.stream());
	}

	function images() {
		return gulp
			.src("./resources/img/**/*")
			.pipe(newer("./public/img"))
			.pipe(
				imagemin([
					imagemin.gifsicle({ interlaced: true }),
					imagemin.mozjpeg({ quality: 75, progressive: true }),
					imagemin.optipng({ optimizationLevel: 5 }),
					imagemin.svgo({
						plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
					}),
				])
			)
			.pipe(gulp.dest("./public/img"));
	}

	function styles() {
		return gulp.src("./resources/css/main.css").pipe(plumber()).pipe(postcss()).pipe(gulp.dest("public/css")).pipe(browsersync.stream());
	}

	function scripts() {
		return gulp
			.src("./resources/js/*.js")
			.pipe(plumber())
			.pipe(concat("main.js"))
			.pipe(rename({ suffix: ".min" }))
			.pipe(uglify())
			.pipe(gulp.dest("public/js"))
			.pipe(browsersync.stream());
	}

	// Watch files
	function watchFiles() {
		gulp.watch("./resources/views/**/*", gulp.series(styles, html));
		gulp.watch("./resources/css/**/*", styles);
		gulp.watch("./resources/js/**/*", scripts);
		gulp.watch("./resources/img/**/*", images);
		gulp.series(browserSyncReload);
	}

	// define complex tasks
	const build = gulp.series(clean, gulp.parallel(html, styles, images, scripts));
	const watch = gulp.parallel(watchFiles, browserSync);

	// export tasks
	exports.build = build;
	exports.watch = watch;
}
