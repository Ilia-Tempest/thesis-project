var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinyPNG = require('gulp-tinypng-compress');



gulp.task('minify-css', function(cb){
 return gulp.src('./src/css/*.css')
.pipe(cleanCSS({
  compatibility: 'ie8'
}))
.pipe(gulp.dest('dist/css/'))

cb();
});

gulp.task('move-js', function(cb){
  return gulp.src('./src/js/*.js')
 .pipe(gulp.dest('dist/js/'))
 cb();
 });

 gulp.task('htmlmin', function(cb){
  return gulp.src('./src/*.html')
  .pipe(htmlmin({ 
    collapseWhitespace: true 
  }))
 .pipe(gulp.dest('dist/'))
 cb();
 });

 gulp.task('fonts', function(cb){
  return gulp.src('./src/fonts/**')
 .pipe(gulp.dest('dist/fonts'))
 cb();
 });

 
gulp.task('tinypng', function (cb) {
    gulp.src('./src/img/**.{png,jpg,jpeg}')
        .pipe(tinyPNG({
            key: '4mg3NZJGx2BsT6tQptRSfdkbjycQl5Mq'
        }))
        .pipe(gulp.dest('dist/img/'));
        cb();
});


gulp.task('default', gulp.parallel('minify-css', 'move-js', 'htmlmin', 'fonts', 'tinypng'));
 

