'use strict';

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);


	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		app: 'app',
		dist: 'dist',

		sass: {
			dist: {
				options: {
					style: 'expanded', // expanded or nested or compact or compressed
					loadPath: '<%= app %>/bower_components/foundation/scss',
					compass: true,
					quiet: true
				},
				files: {
					'<%= app %>/css/app--no-prefix.css': '<%= app %>/scss/app.scss'
				}
			}
		},

		
		jade: {
			compile: {
				options: {
					pretty: true,
					data: {
						debug: false
					}
				},
				files: [{
					expand: true,
					cwd: '<%= app %>/',
					src: ['**/*.jade', '!**/header.jade', '!**/footer.jade'],
					ext: '.html',
					dest: '<%= app %>/'
				}]
			}
		},

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'<%= app %>/js/**/*.js'
			]
		},

		clean: {
			dist: {
				src: ['<%= dist %>/*']
			},
		},
		copy: {
			dist: {
				files: [{
					expand: true,
					cwd:'<%= app %>/',
					src: ['fonts/**', '**/*.html', '!**/*.scss', '!bower_components/**'],
					dest: '<%= dist %>/'
				}]
			},
		},

		imagemin: {
			dynamic: {
				options: {
					optimizationLevel: 7,
					progressive: true
				},
				files: [{
					expand: true,
					cwd: '<%= app %>/images/',
					src: ['**/*.{jpg,gif,svg,jpeg,png}'],
					dest: '<%= dist %>/images/'
				}]
			}
		},


		useminPrepare: {
			html: ['<%= app %>/index.html'],
			options: {
				dest: '<%= dist %>'
			}
		},

		uglify: {
			options: {
				preserveComments: 'some',
				mangle: false
			},
			dist: {}
		},

		usemin: {
			html: ['<%= dist %>/**/*.html', '!<%= app %>/bower_components/**'],
			css: ['<%= dist %>/css/**/*.css'],
			options: {
				assetsDirs: ['<%= dist %>', '<%= dist %>/images']
			}
		},

		watch: {
			grunt: {
				files: ['Gruntfile.js'],
				tasks: ['sass']
			},
			sass: {
				files: '<%= app %>/scss/**/*.scss',
				tasks: ['sass']
			},
			jade: {
				files: '<%= app %>/**/*.jade',
				tasks: ['jade']
			},
			autoprefixer: {
				files: '<%= app%>/css/app--no-prefix.css',
				tasks: ['autoprefixer']
			},
			livereload: {
				files: ['<%= app %>/**/*.html', '!<%= app %>/bower_components/**', '<%= app %>/js/**/*.js', '<%= app %>/css/**/*.css', '<%= app %>/images/**/*.{jpg,gif,svg,jpeg,png}'],
				options: {
					livereload: true
				}
			}
		},

		connect: {
			app: {
				options: {
					port: 9000,
					base: '<%= app %>/',
					open: true,
					livereload: true,
					hostname: '0.0.0.0'
				}
			},
			dist: {
				options: {
					port: 9001,
					base: '<%= dist %>/',
					open: true,
					keepalive: true,
					livereload: false,
					hostname: '127.0.0.1'
				}
			}
		},

		wiredep: {
			target: {
				src: [
					'<%= app %>/**/*.jade'
				],
				exclude: [
					'modernizr',
					'font-awesome',
					'jquery-placeholder',
					'jquery.cookie',
					'foundation'
				]
			}
		},

		autoprefixer: {
        	single_file: {
        		src: '<%= app %>/css/app--no-prefix.css',
        		dest: '<%= app %>/css/app.css'
        	},
    		options: {
  				browsers: ['last 2 version', '> 5%', 'ie 9', 'chrome 20']
			}
        },

        // Filerev
		filerev: {
		    options: {
		        encoding: 'utf8',
		        algorithm: 'md5',
		        length: 8
		    },
		    release: {
		        // filerev:release hashes(md5) all assets (images, js and css )
		        // in dist directory
		        files: [{
		            src: [
		                '<%= dist %>/images/*.{png,gif,jpg,svg}',
		                '<%= dist %>/js/*.js',
		                '<%= dist %>/css/*.css',
		            ]
		        }]
		    }
		}

	});

	grunt.registerTask('compile-jade', ['jade']);
	grunt.registerTask('compile-sass', ['sass']);
	grunt.registerTask('bower-install', ['wiredep']);
	
	grunt.registerTask('default', ['compile-jade', 'compile-sass', 'connect:app', 'watch']);
	grunt.registerTask('validate-js', ['jshint']);
	grunt.registerTask('server-dist', ['connect:dist']);
	
	grunt.registerTask('publish', ['compile-jade', 'compile-sass', 'clean:dist', 'validate-js', 'useminPrepare', 'copy:dist', 'newer:imagemin', 'concat', 'cssmin', 'uglify', 'filerev', 'usemin']);
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-filerev');
};