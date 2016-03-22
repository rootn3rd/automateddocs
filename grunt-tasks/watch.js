module.exports = {

    options: {
        livereload: true,
    },
    
    typescript: {
        files: ['**/*.ts'],
        tasks: ['ts' , 'typedoc'],
    }


    // scripts: {
    //     files: ['**/*.js'],
    //     tasks: ['jshint'],
    //     options: {
    //         spawn: false,
    //     },
    // },
};