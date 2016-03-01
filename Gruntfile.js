'use strict';

module.exports = function (grunt){
	grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-serve'); 
	grunt.initConfig({
		karma: {
			unit : {
				configFile: 'karma.conf.js'
			}
		}
	});


};
