var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

var bootstrap = {
    scss: [],
    // scss: ['node_modules/bootstrap/scss/**.scss'],
    js: ['node_modules/bootstrap/dist/js/bootstrap.min.js'],
};

var slim = {
    scss: ['src/scss/*.scss'],
    js: ['src/js/*.js'],
}

var dist = {
    css: 'dist/css/',
    js: 'dist/js/',
};

gulp.task('sass', function() {
  gulp.src(bootstrap.scss.concat(slim.scss))
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true,
            remove:true
        }))
    .pipe(rename({suffix: "-min"}))
    .pipe(gulp.dest(dist.css));
});

gulp.task('js', function() {
  console.log(bootstrap.js.concat(slim.js))
  gulp.src(bootstrap.js.concat(slim.js))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dist.js));
});

gulp.task('watch', function () {
   gulp.watch(slim.scss, ['sass']);
   gulp.watch(slim.js, ['js']);
});

gulp.task('default', ['sass', 'js']);