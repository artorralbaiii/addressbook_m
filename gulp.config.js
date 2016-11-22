var client = './src/client/';
var clientApp = client + 'app/';
var server = './src/server/';


module.exports = function () {

    var config = {

        /* File Path */

        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        client: client,
        css: client + 'styles/**/*.css',
        index: client + 'index.html',
        js: [
            clientApp + '**/*.module.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.spec.js'
        ],
        server: server,

        /**
         * Bower and NPM locations
         */
        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../..'
        },

        /* Node settings */

        defaultPort: 3000,
        nodeServer: './src/server/app.js'

    };

    config.getWiredepDefaultOptions = function () {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };

    return config;

};