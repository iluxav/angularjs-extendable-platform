module.exports = function(grunt) { // 1
    grunt.initConfig({ // 2
        pkg: grunt.file.readJSON('package.json'), // 3
        options: {
            // define a string to put between each file in the concatenated output
            separator: ';'
        },
        concat:{
            dist: {
                // the files to concatenate
                src: [
                    "public/modules/core/js/registry/screenRegistry.js",
                    "public/modules/*/screen.js",
                    "public/modules/*/extension.js",
                    "public/modules/*/js/{controllers,directives,services}/*.js",
                    "public/js/init.js",
                    "public/modules/core/js/services/htmlAppendMethods.js"
                ],
                // the location of the resulting JS file
                dest: 'public/js/lib/global.min.js'
            }
        },
        concat_css: {
            options: {
                // Task-specific options go here.
            },
            all: {
                dest: "public/css/lib/dist.min.css",
                src: [
                    "public/css/*.css",
                    "public/modules/**/css/*.css"
                ]
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'public/js/lib/concat.global.min.js': ['<%= concat.dist.src %>']
                }
            }
        },
        watch: {
            files: ['<%= concat.dist.src %>'],
            tasks: ['concat', 'uglify']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-concat-css');


    grunt.registerTask('default', ['concat','uglify']);
}
