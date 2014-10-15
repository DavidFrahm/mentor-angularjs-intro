module.exports = function (config) {
    config.set({
      basePath: '../',

      frameworks: ['ng-scenario'],

      files: [
          'test/e2e/**/*.js'
      ],

      exclude: [],

      autoWatch: false,

      singleRun: true,

      browsers: ['PhantomJS'], // ['Chrome', 'Safari', 'PhantomJS']

      // coverage reporter generates the coverage
      reporters: ['progress', 'junit', 'coverage'],

      junitReporter: {
          outputFile: 'test_out/e2e.xml',
          suite: 'e2e'
      },

      preprocessors: {
          // source files, that you wanna generate coverage for
          // do not include tests or libraries
          // (these files will be instrumented by Istanbul)
          'app/js/**/*.js': ['coverage']
      },

      // optionally, configure the reporter
      coverageReporter: {
          type: 'html',
          dir: 'coverage/'
      },

      plugins: [
          'karma-ng-scenario',
          'karma-junit-reporter',
          'karma-coverage',
          'karma-phantomjs-launcher',
          'karma-chrome-launcher',
          'karma-safari-launcher',
          'karma-firefox-launcher'
      ],

      proxies: {
          '/': 'http://localhost:8000/'
      }
    });
};