var gulp = require('gulp');

gulp.task('default', function () {
	require('browser-sync')({
		notify: false,
		directory: true,
		open: false,
		port: 8090,
		server: {
			baseDir: '.'		
		}
	});
});
