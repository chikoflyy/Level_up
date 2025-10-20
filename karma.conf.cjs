module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'tests/**/*.spec.jsx'
    ],
    preprocessors: {
      'tests/**/*.spec.jsx': ['webpack']
    },
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                babelrc: false,
                configFile: false,
                presets: [
                  ['@babel/preset-env', { targets: { node: 'current' } }],
                  ['@babel/preset-react']
                ]
              }
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
