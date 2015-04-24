module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-animate/angular-animate.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/js/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],
    
    // coverage reporter generates the coverage
    reporters: ['progress', 'coverage'],

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'app/js/**/*.js': ['coverage']
    },

    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : 'coverage'
    } ,   
      
    plugins : [
            'karma-chrome-launcher',
            //'karma-firefox-launcher',
            'karma-jasmine',
            'karma-coverage'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};