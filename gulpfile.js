var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    nunjucks    = require('gulp-nunjucks');
    uglify      = require('gulp-uglify');


gulp.task('script', function() {
    return gulp.src('script/*.js')
        .pipe(concat('demo.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/static/js'))
});

gulp.task('vendor', function() {
    return gulp.src('vendor/*.js')
        .pipe(gulp.dest('app/static/js'))
});

gulp.task('nunjucks', () =>
	gulp.src('app/templates/fragments/*')
		.pipe(nunjucks.precompile())
    .pipe(concat('templates.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/static/js'))
);


gulp.task('default', ['build']); // Have gulp run the 'build' task as a default

gulp.task('build', ['script', 'vendor', 'nunjucks']);
