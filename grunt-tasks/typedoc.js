module.exports = {
    build: {
        options: {
            module: 'commonjs',
            out: './docs',
            name: 'automateddocs',
            target: 'es5'
        },
        src: ['./main/**/*']
    }
}