module.exports = function(grunt) {
    
    grunt.file.readJSON('package.json');
    
    /*grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-newer');*/
    /*******-----------OR--------*************/  
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);
    
    grunt.initConfig({
        watch: {
            options: {
                    dateFormat: function(time) {
                      grunt.log.writeln('\nThe watch finished in ' + time + 'ms at ' + (new Date()).toString());
                      grunt.log.writeln('\nWaiting for more changes...');
                    } 
            },
            scripts: {
                files: ['app/**/*.js'],
                tasks: ['jshint'],
            }
        },
        jshint: { 
            options: {
                jshintrc: '.jshintrc'
            },
			preConcat: ['app/js/**/*.js']
		},

        clean: {
          build: {
            src: ['prod/'] 
          }
        },
        useminPrepare: {
            html: 'app/index.html'
        },
 
        usemin: {
            html: ['prod/index.html']
        },
        copy: {
            all: {
                cwd: 'app',  // set working folder / root to copy
                src: ['*.html', 'partials/{,*/}*.html','phones/*.json','img/**/*.*'], // copy all required files and subfolders
                dest: 'prod/',    // destination folder
                expand: true,           // required when using cwd
                flatten: false
            }
        },
        concat: {
			options: {
				separator: '\n\n'
			},
            concatLibs: {
                src: [
                    'app/bower_components/angular/angular.js',
                    'app/bower_components/angular-animate/angular-animate.js',
                    'app/bower_components/angular-route/angular-route.js',
                    'app/bower_components/angular-resource/angular-resource.js'
                ],
                dest: 'prod/js/app-vendor.js'
            },
			concateJS: {
                src: ['app/js/**/*.js'],
                dest: 'prod/js/app-main.js'
            },
            concateCSS: {
                options: {
                    separator: ';'
                },
                src: ['app/css/*.css', 'app/bower_components/bootstrap/dist/css/bootstrap.css'],
                dest: 'prod/styles/app-main.css'
            }
		},
        uglify: {
            optimizedJS: {
				options: {
					//sourceMap: 'prod/js/all.min.js.map',
				},
				files: {
					'prod/js/app-main.min.js': 'prod/js/app-main.js',
                    'prod/js/app-vendor.min.js': 'prod/js/app-vendor.js'
				}
			}
        },
        cssmin: {
            optimzedCSS: {
                files: {
					'prod/styles/app-main.min.css': 'prod/styles/app-main.css'
				}
            }
        },
        htmlmin: {
          prod: {
            options: {
              collapseWhitespace: true,
              conservativeCollapse: true,
              collapseBooleanAttributes: true,
              removeCommentsFromCDATA: true,
              removeOptionalTags: true
            },
            files: [{
              expand: true,
              cwd: 'prod/',
              src: ['*.html', 'partials/{,*/}*.html'],
              dest: 'prod/'
            }]
          }
        },
        
        connect: {
          all: {
            options:{
              port: 9000,
              hostname: "0.0.0.0",
              // Prevents Grunt to close just after the task (starting the server) completes
              // This will be removed later as `watch` will take care of that
              keepalive: true
            }
          }
        },
        // grunt-open will open your browser at the project's URL
        open: {
            prod: {
                // Gets the port from the connect configuration
                path: 'http://localhost:<%= connect.all.options.port%>/prod'
            },
            dev: {
                // Gets the port from the connect configuration
                path: 'http://localhost:<%= connect.all.options.port%>/app'
            }
        }
        
          
    });
   
    
    grunt.registerTask('build',[
        'clean',
        'copy:all',
        'useminPrepare',
        'concat',
        'uglify',
        'cssmin',
        'usemin',
        'htmlmin'
    ]);
    
    grunt.registerTask('server:prod', ['open:prod', 'connect'])
    grunt.registerTask('server:dev', ['open:dev', 'connect'])
    
}