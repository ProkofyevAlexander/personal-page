const conf = require('./gulp.conf');

module.exports = function () {
  return {
    server: {
      baseDir: [
        conf.paths.dist
      ]
    },
    port: 80,
    watchOptions: {
      ignoreInitial: true,
      ignored: '*'
    },
    ui: false,
    ghostMode: false,
    open: false,
    reloadOnRestart: false,
    notify: false,
    codeSync: false
  };
};

