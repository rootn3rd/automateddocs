module.exports = {
    default: {
        src: ["**/*.ts", "!node_modules/**/*.ts"],
        options: {
            comments: true //preserves comments in output. 
        }
    }
};