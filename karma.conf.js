module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'node_modules/whatwg-fetch/dist/fetch.umd.js',
      'tests/**/*.spec.js'
    ],
    preprocessors: {
      'tests/**/*.spec.js': ['webpack']
    },
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx']
      }
    },
    reporters: ['progress'],
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity
  });
};
