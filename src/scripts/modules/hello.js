steal('scripts/base/app.js', 'can/control/', 'src/templates/hello/main.hbs!', 'jquery', 'can/construct/super/', function (App, Control, view, $) {
	return Control.extend({
		init: function () {
			this._super();
			this.element.append(view({msg: $.fn.jquery}));
		}
	});
});
