 var gulp = require('gulp');

gulp.task('optimizeImages', function(){
	return gulp.src(['.app/assets/images/**/*'])
	.pipe(gulp.dest("./dist/assets/images"));
});


 gulp.task('build', []);