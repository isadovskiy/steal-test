var gulp = require('gulp'),
	fs = require('fs');

gulp.task('prod-connect', function () {
	require('browser-sync')({
		notify: false,
		directory: true,
		open: false,
		port: 8091,
		server: {
			baseDir: 'src'
		}
	});
});

gulp.task('prod', function () {
	fs.writeFileSync('./bundles/all/all.js', '' +
		'define(["' + ['scripts/modules/hello'].join('", "') + '"], function () {});'
	);
	require('steal-tools').build(
		{
			main:			'all',
			config:			'./bower.json!bower',
			bundlesPath:	'./src/dists/',
			paths: (function () {
				var paths = {};

				paths['all'] = './bundles/all/all.js';
				return paths;
			})()
		},
		{
			bundle: ['all'],
			sourceMaps: false,
			bundleSteal: true,
			debug: false,
			minify: false
		}
	);
});

gulp.task('default', function () {
	require('browser-sync')({
		notify: false,
		directory: true,
		open: false,
		port: 8090,
		server: {
			baseDir: 'src',
			middleware: [
				require('connect-modrewrite')([
					'^/package\.json$ /root/package.json',
					'^/bower\.json$ /root/bower.json'
				])
			],
			routes: {
				'/root': './',
				'/src': './src',
				'/bower_components': './bower_components',
				'/node_modules': './node_modules'
			}
		}
	});
});
