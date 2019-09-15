var gulp = require('gulp'),
		mincss = require('gulp-clean-css');

gulp.task('min', function(){
	gulp.src('src/css/*.css')
		.pipe(mincss())
		.pipe(gulp.dest('build/css')); 
});
