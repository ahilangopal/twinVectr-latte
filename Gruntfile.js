module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.initConfig({
        pkg: grunt
            .file
            .readJSON('package.json'),
        sass: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'assets/styles',
                        src: ['base.scss'],
                        dest: 'dist/styles/css',
                        ext: '.css'
                    }
                ]
            }
        },
        cssmin: {
            target: {
                files: [
                    {
                        expand: true,
                        cwd: 'dist/styles/css',
                        src: ['base.css'],
                        dest: 'dist/styles/minified',
                        ext: '.min.css'
                    }
                ]
            }
        },
        watch: {
            scripts: {
                files: ['assets/styles/**/*.scss'],
                tasks: [
                    'sass', 'cssmin'
                ],
                options: {
                    spawn: false
                }
            }
        }
		});
		
    grunt.registerTask('compass', ['sass', 'cssmin']);
    grunt.registerTask('watch', ['watch']);

};
