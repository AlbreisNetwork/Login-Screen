
var gulp = require('gulp'),
      typescript = require('gulp-typescript'),
      jade = require('gulp-jade'),
      vueify = require('gulp-vueify'),
      concatCss = require('gulp-concat-css'),
      stylus = require('gulp-stylus');

/**
 * Compila os arquivos .jade em HTML
 */
gulp.task('html', function(){
  return gulp
    .src('./src/**/*.jade')
    .pipe(jade({
      compress: true
    }))
    .pipe(gulp.dest('./dist/'));
});

/**
 * Compila os arquivos .vue em HTML
 */
gulp.task('vueify', function () {
  return gulp.src('./src/**/*.vue')
    .pipe(vueify())
    .pipe(gulp.dest('./dist/'));
});

/**
 * Compila os arquivos .styl em CSS
 */
gulp.task('styles', function(){
  return gulp
    .src('./src/**/*.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(concatCss("app.css"))
    .pipe(gulp.dest('./dist/'));
});

/**
 * Compila os arquivos .ts em JS
 */
gulp.task('scripts', function(){
  return gulp
    .src('./src/**/*.ts')
    .pipe(typescript({
      compress: true,
      module: 'amd',
      noImplicitAny: true,
      outFile: 'app.js'
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', ['styles', 'scripts', 'html', 'vueify'], function(){
  gulp.watch('./src/**/*.ts', ['scripts']);
  gulp.watch('./src/**/*.styl', ['styles']);
  gulp.watch('./src/**/*.jade', ['html']);
  gulp.watch('./src/**/*.vue', ['vueify']);
});

gulp.task('default', ['styles', 'scripts', 'html', 'vueify', 'watch']);