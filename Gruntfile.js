// Load Grunt
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Tasks
    sass: { // Begin Sass Plugin
      dist: {
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['**/*.scss'],
          src: ['**/**/*.scss'],
          dest: 'static/css', 
          ext: '.css'
      }]
      }
    },
    uglify: { // Begin JS Uglify Plugin
      build: {
        src: ['src/*.js'],
        dest: 'static/js/script.min.js'
      }
    },
    watch: { // Compile everything into one task with Watch Plugin
      css: {
        files: '**/*.scss',
        files: '**/**/*.scss',
        tasks: ['sass']
      },
      js: {
        files: '**/*.js',
        tasks: ['uglify']
      }
    }
  });
  // Load Grunt plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register Grunt tasks
  grunt.registerTask('default', ['watch']);
};