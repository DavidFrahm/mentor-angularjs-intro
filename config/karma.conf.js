module.exports = function (config) {
    config.set({
        basePath: '../',

        frameworks: ['jasmine'],

        files: [
            'app/lib/angular/angular.js',
            'app/lib/angular/angular-*.js',
            'test/lib/angular/angular-mocks.js',
            'app/js/**/*.js',
            'test/unit/**/*.js'
        ],

        exclude: [
            'app/lib/angular-1.2.0-rc.3/angular-mocks.js',
            'app/lib/angular-1.2.0-rc.3/angular-scenario.js',
            'app/lib/angular-1.2.0-rc.3/angular-loader*.js'
        ],

        autoWatch: true,

        browsers: ['PhantomJS'], // ['Chrome', 'Safari', 'PhantomJS']

        reporters: ['progress', 'junit', 'coverage'],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },

        preprocessors: {
            // Source files that you want to generate coverage for
            // (Do not include tests or libraries)
            'app/js/**/*.js': ['coverage']
        },

        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },

        plugins: [
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-safari-launcher',
            'karma-firefox-launcher'
        ]
    });
};