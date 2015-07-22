steal('scripts/base/app.js', 'can/control/', 'src/templates/hello/main.hbs!', 'jquery', function (App, Control, view, jQuery) {
	return Control.extend({
		init: function () {
			this.element.append(view({msg: jQuery.fn.jquery}));
		}
	});
});
