module.exports = function(grunt) {

	//set up a quick sever dev wth connect
	 grunt.initConfig({
	    connect: {
	      	all: {
		        port: 9000,
		        base: 'app' 
	      	}
	    },
	    karma: {  
		  unit: {
		    options: {
		      frameworks: ['jasmine'],
		      singleRun: true,
		      browsers: ['PhantomJS'],
		      files: [
		        'app/bower_components/angular/angular.js',
		        'app/bower_components/angular-mocks/angular-mocks.js',
		        'app/bower_components/angular-route/angular-route.js',
		        'app/scripts/**/*.js'
		      ]
		    }
		  }
		}
	});

  	grunt.loadNpmTasks('grunt-connect');
  
  	grunt.loadNpmTasks('grunt-karma'); 

   grunt.registerTask('server',['connect:all']);
   grunt.registerTask('test', ['karma']);
 

 };