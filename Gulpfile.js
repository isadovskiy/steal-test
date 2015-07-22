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
	require('steal-tools').build(
		{
			main:			['scripts/main'],
			config:			'./bower.json!bower',
			bundlesPath:	'./src/dists/'
		},
		{
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
