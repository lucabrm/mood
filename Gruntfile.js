module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/lib/*.js',
        dest: 'js/lib/<%= pkg.name %>.min.js'
      },
      test: {
        src: 'js/lib/*.js',
        dest: 'js/lib/test.min.js'
      }
    },
    cssmin: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'css/*.css',
        dest: 'css/<%= pkg.name %>.min.css'
      }
    },
  handlebars: {

    build: {
      src: 'js/tpl/*',
      dest: 'js/tpl/compiled-templates.js'
    },
    hwatch: {
      options: {
        amd:true
      },
      files: {
        "js/tpl/compiled-templates.js": "js/tpl/*.hbs"
      },
    }
  },
  watch: {
 
    scripts: {
     
      tasks: ['handlebars:hwatch'],
      files: "js/tpl/*.hbs",
    },
},
});

  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify:test','cssmin','handlebars']);
  grunt.registerTask('hbs', ['watch']);

};