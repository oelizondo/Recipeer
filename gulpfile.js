var gulp 	= require('gulp'),
	sass 	= require('gulp-sass'),
	coffee 	= require('gulp-coffee'),
	watch 	= require('gulp-watch'),
	plumber = require('gulp-plumber');

gulp.task('coffee-compile', function(){
	gulp.src('js/**/*.coffee')
		.pipe(watch('js/**/*.coffee'))
		.pipe(plumber())
		.pipe(coffee())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('sass-compile', function(){
	gulp.src('css/*.scss')
	.pipe(watch('css/*.scss'))
	.pipe(plumber())
	.pipe(sass())
	.pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['coffee-compile', 'sass-compile']);