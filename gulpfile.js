const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();

function styles() {
 return gulp
  .src("./src/scss/**/*.scss")
  .pipe(sass().on("error", sass.logError))
  .pipe(gulp.dest("./dist/css"))
  .pipe(browserSync.stream());
}

function html() {
 return gulp
  .src("./src/*.html")
  .pipe(gulp.dest("./dist"))
  .pipe(browserSync.stream());
}

function scripts() {
 return gulp
  .src("./src/js/**/*.js")
  .pipe(gulp.dest("./dist/js"))
  .pipe(browserSync.stream());
}

function assets() {
 return gulp
  .src("./src/assets/**/*", { encoding: false })
  .pipe(gulp.dest("./dist/assets"))
  .pipe(browserSync.stream());
}

function watch() {
 browserSync.init({
  server: {
   baseDir: "./dist",
  },
 });
 gulp.watch("./src/scss/**/*.scss", styles);
 gulp.watch("./src/*.html", html);
 gulp.watch("./src/js/**/*.js", scripts);
 gulp.watch("./src/assets/**/*", assets);
}

exports.styles = styles;
exports.html = html;
exports.scripts = scripts;
exports.assets = assets;

exports.default = gulp.series(
 gulp.parallel(html, styles, scripts, assets),
 watch,
);
