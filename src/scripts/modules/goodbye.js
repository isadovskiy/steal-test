steal('can/control/', 'src/templates/goodbye/goodbye.hbs!', 'jquery', 'can/construct/super/', function (Control, view, $) {
	return Control.extend({
		init: function () {
			this._super();
			this.element.append(view({msg: $.fn.jquery}));
		}
	});
});
