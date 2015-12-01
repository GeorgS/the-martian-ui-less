module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dist/',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/',
          ext: '.min.css'
        }]
      }
    },
    less: {
      development: {
        options: {
        },
        files: {
          "dist/the-martian-ui.css": "less/main.less"
        }
      }
    },
    watch: {
      styles: {
        files: ['less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['less', 'watch']);
  grunt.registerTask('build', ['less', 'cssmin']);

};
