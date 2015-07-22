steal('can', function () {
	var App = can.Construct.extend({
		init: function () {
			console.log('Hello, world!');
		}
	});

	App.secret = 'secret';
	return App;
});