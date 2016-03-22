module.exports = function(grunt) {
    grunt.initConfig({
        ts: require('./grunt-tasks/ts.js'),

        watch:  require('./grunt-tasks/watch.js'),
        
        typedoc : require('./grunt-tasks/typedoc.js')
    });
    
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-typedoc');
    
    grunt.registerTask("default", ["ts"]);
    grunt.registerTask("watchtask", ["watch"]);
    grunt.registerTask("createdoc", ["typedoc"]);
};