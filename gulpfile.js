var gulp = require('gulp');
var args = require('yargs').argv;
var $ = require('gulp-load-plugins')({
    lazy: true
});

var config = require('./gulp.config.js')();
var port = process.env.PORT || config.defaultPort;

gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

gulp.task('vet', function () {
    log('Analyzing JSHint and JSCS');

    return gulp
        .src(config.alljs)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe($.jshint.reporter('fail'));

});

gulp.task('serve-dev', ['vet'], function () {
    serve('dev');
});

//////////

function log(msg) {
    if (typeof (msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}

function serve(env) {
    var nodeOptions = {
        script: config.nodeServer,
        delayTime: 1,
        env: {
            'PORT': port,
            'NODE_ENV': env
        },
        watch: [config.server]
    };

    return $.nodemon(nodeOptions)
        .on('restart', function (evt) {
            log('*** nodemon restarted');
            log('files changed on restart:\n' + evt);
        }).on('start', function () {
            log('*** nodemon started');
        })
        .on('crash', function () {
            log('*** nodemon crashed: script crashed for some reason');
        })
        .on('exit', function () {
            log('*** nodemon exited cleanly');
        });
    
}