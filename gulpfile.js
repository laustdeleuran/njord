/*jshint node:true,strict:true,undef:true,unused:true*/
'use strict';


/**
 * Import tasks
 **/
var plumber = require('gulp-plumber');
var bump = require('gulp-bump');
var del = require('del');
var sass = require('gulp-sass');
var sassdoc = require('sassdoc');
var gutil = require('gulp-util');
var gulp = require('gulp');



/**
 * Environment
 **/
// Determine whether running in production or not: If NODE_ENV=production or invoking gulp with --production argument.
var isProduction = process.env.NODE_ENV === 'production' || !!gutil.env.production;

// Style path
var styleExamples = './examples/**/*.scss';
var styleMain = './src/njord.scss';
var styleFiles = './src/**/*.scss';



/**
 * Tasks
 */
// Cleans the destination build folder: gulp clean
gulp.task('clean', function(cb) {
	del('*.css', cb);
});

// Compile Compass stylesheets to CSS.
gulp.task('examples', function() {
	gulp.src(styleExamples)
		.pipe(plumber())
		.pipe(sass({
			precision: 10,
			outputStyle: isProduction ? 'compressed' : 'expanded',
			errLogToConsole: true
		}))
		.pipe(gulp.dest('./examples'));
});

// Compile Compass stylesheets to CSS.
gulp.task('style', function() {
	gulp.src(styleMain)
		.pipe(plumber())
		.pipe(sass({
			precision: 10,
			outputStyle: isProduction ? 'compressed' : 'expanded',
			errLogToConsole: true
		}))
		.pipe(gulp.dest('./'));
});

// Versioning
gulp.task('bump', function() {
	gulp.src(['package.json'], {
			base: './'
		})
		.pipe(bump({
			type: gutil.env.bump ? gutil.env.bump : 'patch'
		}))
		.pipe(gulp.dest('./'));
});

// Watch for file changes and build accordingly.
gulp.task('watch', function() {
	gulp.watch(styleFiles, ['style']);
	gulp.watch([styleFiles, styleExamples], ['examples']);
});

// Documentation
gulp.task('sassdoc', function () {
	return gulp.src(styleFiles)
		.pipe(sassdoc({
			dest: './docs',
			descriptionPath: './readme.md',
			groups: require('./sassdoc-groups')
		}));
});

// Default tasks.
// In NPM it is setup with: gulp clean && gulp build --production
gulp.task('build', ['style']);

// When developing you can continuously build files using just: gulp
gulp.task('default', ['build', 'watch']);