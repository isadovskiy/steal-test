steal('scripts/base/app.js', 'can', 'can/construct/super/', 'jquery-dist.js', function (App, can, canSuper, $) {
	return App.extend({
		init: function () {
			this._super();
			console.log($.fn.jquery);
			can.$('body').append(App.secret);
		}
	});
});
