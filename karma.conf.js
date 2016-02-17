'use strict';

module.exports = function (config) {
	config.set({
		frameworks : ['jasmine'],
		browsers: ['PhantomJS'],
		files: [
		'src/app.js',
		'specs/unit/*.js'
		],
		reporters: ['dots']
	});
};
