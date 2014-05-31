module.exports = function(grunt) { // 1
    grunt.initConfig({ // 2
        pkg: grunt.file.readJSON('package.json'), // 3
        uglify: { // 4
            options: { // 5
                banner: '/*\n' + // 6
                    ' * ' + '<%= pkg.name %>\n' + // 7
                    ' * ' + 'v<%= pkg.version %>\n' + // 8
                    ' * ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + // 9
                    ' **/\n'
            },
            my_target: {
                files: {
                    'public/js/global.min.js': [
                        "public/js/lib/angular/angular.js",
                        "public/js/bootstrap.js",
                        "public/modules/core/js/services/extensionRegister.js",
                        "public/modules/*/screen.js",
                        "public/modules/*/extension.js",
                        "public/modules/*/js/{controllers,directives,services}/*.js",
                        "public/js/init.js",
                        "public/modules/core/js/services/htmlAppendMethods.js"
                    ] // 10
                }
            }
        },
        watch:{
            options: { nospawn: true },
            scripts: {
                files: [
                    "public/js/lib/angular/angular.js",
                    "public/js/bootstrap.js",
                    "public/modules/core/js/services/extensionRegister.js",
                    "public/modules/*/screen.js",
                    "public/modules/*/extension.js",
                    "public/modules/*/js/{controllers,directives,services}/*.js",
                    "public/js/init.js",
                    "public/modules/core/js/services/htmlAppendMethods.js"
                ],
                tasks: ['uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify'); // 11

}
