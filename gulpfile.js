var gulp			= require('gulp'),
	autoprefixer	= require('gulp-autoprefixer'),
	cleancss		= require('gulp-clean-css'),
	imagemin		= require('gulp-imagemin'),
	uglify			= require('gulp-uglify'),
	imageminjr		= require('imagemin-jpeg-recompress'),
	pngquant		= require('imagemin-pngquant');

gulp.task('img', function() {
	return gulp.src('src/img/**/*') 
		.pipe(imagemin([
		    imagemin.gifsicle({interlaced: true}),
		    imagemin.jpegtran({progressive: true}),
		    imagemin.optipng({optimizationLevel: 5}),
		    imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]
    })
]))
		.pipe(gulp.dest('dist/img'));
});