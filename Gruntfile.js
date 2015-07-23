module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {

      sass: {
        files: '**/*.scss',
        tasks: ['style']
      },

      css: {
        files: ['./style/*.css']
      }

    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'style/style.css': 'style/style.scss'
        }
      }
    },

    autoprefixer: {
      dist: {
        files: {
          'style/style.css': 'style/style.css'
        }
      },
      options: ['last 2 versions', 'ie 9']
    }

  });

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('style', ['sass', 'autoprefixer']);
  grunt.registerTask('default', ['style']);
};