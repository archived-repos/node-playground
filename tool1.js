

var env = require('./env');

env.foo = 'bar';

env.on('ping', function (text, text2) {
	console.log('pong', text, text2);
});

module.exports = {};