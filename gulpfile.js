var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinyPNG = require('gulp-tinypng-compress')

gulp.task('default' , defaultTask);

function defaultTask(done){
    done();
}

gulp.task('minify-css' , function(done) {
    return gulp.src('./src/css/*.css')
    .pipe(cleanCSS({
        compatibility: 'ie8'
    }))
    .pipe(gulp.dest('dist/css/'))
    done();
});

gulp.task('move-js' , function(done) {
    return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('dist/js/'))
    done();
});

gulp.task('htmlmin' , function(done) {
    return gulp.src('./src/*.html')
    .pipe(htmlmin({
        collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/'))
    done();
});

gulp.task('tinypng' , function(done) {
    return gulp.src('./src/img/**/*.{png, jpg, jpeg}')
        .pipe(tinyPNG ({
            key: 'gzJBkS7CYd4Jl4SHdG1hwM3CvD2FpMWC'
        }))
        .pipe(gulp.dest('dist/img/'));
        done();
});