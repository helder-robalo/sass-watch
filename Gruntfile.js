'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      options: {
        style: 'compact', // compact, compressed, expanded, nested,
        sourcemap: 'none' // auto, file, inline, none
      },
      dist: {
        files: {
          'public/css/application.css': 'sass/main.sass'
        }
      }
    },
    watch: {
      sass: {
        files: ['**/*.sass'],
        tasks: ['css']
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('watch-sass', ['watch']);
  grunt.registerTask('css', ['sass']);
};