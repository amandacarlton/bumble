var gulp = require('gulp');
var jade = require("gulp-jade");

var jadeLayout = ['./public/jade_layout/*jade'];

var jadeAuthPartials = ['./public/jade_layout/partials/auth/*jade'];

var jadePartials = ['./public/jade_layout/partials/*jade'];

gulp.task('jadeLayout', function() {
  var YOUR_LOCALS = {};

  gulp.src(jadeLayout)
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./public/'));
});

gulp.task('jadeAuthPartials', function() {
  var YOUR_LOCALS = {};

  gulp.src(jadeAuthPartials)
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./public/partials'));
});

gulp.task('jadePartials', function() {
  var YOUR_LOCALS = {};

  gulp.src(jadePartials)
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./public/partials'));
});


gulp.task('watchout', function () {
  gulp.watch(jadeLayout,['jadeLayout']);
  gulp.watch(jadeAuthPartials,['jadeAuthPartials']);
  gulp.watch(jadePartials,['jadePartials']);
});

gulp.task('default',[
  'jadeLayout',
  'jadeAuthPartials',
  'jadePartials',
  'watchout'
]);
