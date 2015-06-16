
var Events = require('jengine-events');

function Env () {
	console.log('this will be shown only one time');

	new Events(this);
}

module.exports = new Env();
