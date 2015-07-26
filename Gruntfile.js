module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {

      // SASS COMPILATION & AUTOPREFIXER
      sass: {
        files: '**/*.scss',
        tasks: [
          'sass:dev',
          'autoprefixer:dev']
      }

    },

    // SASS COMPILATION
    sass: {
      options: {
        sourceMap: false
      },
      dev: {
        files: {
          'src/style/style.css': 'src/style/style.scss'
        }
      },
      dist: {
        files: {
          'dist/style/style.css': 'src/style/style.scss'
        }
      }
    },

    // AUTOPREFIXER
    autoprefixer: {
      options: ['last 2 versions', 'ie 9'],
      dev: {
        files: {
          'src/style/style.css': 'src/style/style.css'
        }
      },
      dist: {
        files: {
          'dist/style/style.css': 'dist/style/style.css'
        }
      }
    },

    // CSS MINIFY
    cssmin: {
      options: {
        keepSpecialComments: 0,
        check: 'gzip'
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'dist/style/',
          src: ['**/*.css'],
          dest: 'dist/style/'
        }]
      }
    },

    // MINIFY SVG
    svgmin: {
      options: {
        plugins: [{
          cleanupIDs: true,
          removeUselessStrokeAndFill: true,
          removeTitle: true,
          removeAttrs: true
        }]
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src/images/svgs/',
          src: ['*.svg'],
          dest: 'src/images/svgs/'
        }]
      }
    },

    // SVG SPRITE
    svgstore: {
      options: {
        prefix : 'icon-',
        includeTitleElement: false
      },
      dist : {
        files: {
          'dist/svg-defs.svg': ['src/images/svgs/*.svg'],
        }
      }
    },

    // HTML MINIFY
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          removeEmptyAttributes: true,
          minifyJS: true,
          minifyCSS: true
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: '**/*.html',
          dest: 'dist/'
        }]
      }
    }

  });


  // LOAD NPM TASKS
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-svgstore');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // REGISTER TASKS
  grunt.registerTask('svg', ['svgmin', 'svgstore']);

  // BUILD
  grunt.registerTask('build', [
    'sass:dist',
    'autoprefixer',
    'cssmin',
    'svg',
    'htmlmin'
  ]);

  // SERVE
  grunt.registerTask('serve', [
    'sass:dev'
  ]);

  grunt.registerTask('default', ['serve']);
};