steal('can/construct/', function () {
	return can.Construct.extend({
		init: function () {
			console.log('Hello, world!');
		}
	})();
});