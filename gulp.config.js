var server = './src/server/';

module.exports = function () {

    var config = {

        /* File Path */

        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        server: server,

        /* Node settings */
        
        defaultPort: 3000,
        nodeServer: './src/server/app.js'

    };

    return config;

};