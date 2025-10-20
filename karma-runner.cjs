const { Server } = require('karma');
const path = require('path');

const config = {
  configFile: path.resolve(__dirname, 'karma.conf.cjs'),
  singleRun: true,
};

const server = new Server(config, (exitCode) => {
  process.exit(exitCode);
});

server.start();
