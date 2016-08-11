module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            production: {
                options: {
                    compress: true,
                    plugins: [
                        new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
                        new (require('less-plugin-clean-css'))({})
                    ]
                },
                files: {
                    'dist/<%= pkg.name %>.css': 'less/bootstrap-extra-utilities.less'
                }
            }
        },
        clean: {
            dist: 'dist'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['clean', 'less']);
};
