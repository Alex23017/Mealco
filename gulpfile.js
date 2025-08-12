const gulp = require("gulp");
const fileInclude = require("gulp-file-include");
const fileIncludeSettings = {
  prefix: "@@",
  basepath: "@file",
};
const scss = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");

const browserSync = require("browser-sync").create();
const clean = require("gulp-clean");
const fs = require("fs");
const sourceMap = require("gulp-sourcemaps");

const plumber = require("gulp-plumber");
const notify = require("gulp-notify");

const imagemin = require("gulp-imagemin");
const changed = require("gulp-changed");

const postcss = require("gulp-postcss");
const pxtorem = require("postcss-pxtorem");

//JS//
const webpack = require("webpack-stream");

gulp.task("js:docs", function (done) {
  gulp
    .src("./src/js/**/*.js")
    .pipe(plumber(plumberConfig("JS")))
    .pipe(webpack(require("./webpack.config.js")))
    .pipe(gulp.dest("./docs/js"))
    .on("end", function () {
      browserSync.reload();
      done();
    });
});

const plumberConfig = (title) => {
  return {
    errorHandler: notify.onError({
      title: title,
      message: "Error <%= error.message %>",
      sound: false,
    }),
  };
};

gulp.task("html:docs", function () {
  return gulp
    .src("./src/pages/**/*.html")
    .pipe(plumber(plumberConfig("HTML")))
    .pipe(fileInclude(fileIncludeSettings))
    .pipe(gulp.dest("./docs/"))
    .pipe(browserSync.stream());
});

gulp.task("scss:docs", function () {
  return gulp
    .src("./src/scss/**/*.scss")
    .pipe(plumber(plumberConfig("STYLES")))
    .pipe(sourceMap.init())
    .pipe(scss())
    .pipe(
      postcss([
        pxtorem({
          rootValue: 16, 
          propList: ["*"],
          replace: true, 
        }),
      ]),
    )
    .pipe(autoprefixer())
    .pipe(sourceMap.write("."))
    .pipe(gulp.dest("./docs/css/"))
    .pipe(browserSync.stream());
});

gulp.task("images:docs", function () {
  return gulp.src("./src/img/**/*.{png,jpg,jpeg,gif,svg}")
    .pipe(changed("./docs/img/"))
    .pipe(imagemin({ verbose: true }))
    .pipe(gulp.dest("./docs/img/"))
    .pipe(browserSync.stream());
});
gulp.task("fonts:docs", function () {
  return gulp.src("./src/fonts/**/*").pipe(gulp.dest("./docs/fonts/")).pipe(browserSync.stream());
});

gulp.task("clean:docs", function (done) {
  if (fs.existsSync("./docs/")) {
    return gulp.src("./docs/", { read: false }).pipe(clean({ force: true }));
  }
  done();
});

gulp.task("server:docs", function () {
  browserSync.init({
    server: {
      baseDir: "./docs",
      index: "index.html",
    },
    port: 8080,
    open: true,
  });
});

gulp.task("watch:docs", function () {
  gulp.watch("./src/scss/**/*.scss", gulp.series("scss:docs"));
  gulp.watch("./src/**/*.html", gulp.series("html:docs"));
  gulp.watch("./src/img/**/*", gulp.series("images:docs"));
  gulp.watch("./src/js/**/*.js", gulp.series("js:docs"));
  gulp.watch("./src/fonts/**/*", gulp.series("fonts:docs"));
  // gulp.watch("./src/files/**/*", gulp.series("files"));
});

gulp.task(
  "default",
  gulp.series(
    "clean:docs",
    gulp.parallel("html:docs", "scss:docs", "images:docs", "js:docs", "fonts:docs"),
    gulp.parallel("server:docs", "watch:docs"),
  ),
);
