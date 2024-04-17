const Koa = require('koa');

const app = new Koa();

async function createServer () {

  return {
    async listen (port, callback) {
      app.listen(port, callback);
    }
  }
}

// plugin -> app / appPath -> app.use -> 
// context -> 执行上下文 -> plugin -> context (app, appPath)

exports.createServer = createServer;
exports.app = app;

