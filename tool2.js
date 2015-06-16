
var env = require('./env');

console.log('foo', env.foo );

env.trigger('ping', ['text1', 'text2']);

module.exports = {};