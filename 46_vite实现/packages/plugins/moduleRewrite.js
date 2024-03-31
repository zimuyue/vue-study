const { 
  readBodyStream,
  rewriteImports
} = require('../../shared/utils');

async function moduleRewrite ({ app, appPath }) {
  app.use(async (ctx, next) => {

    // todo sth
    await next();

    if (ctx.body && ctx.response.is('js')) {
      const result = await readBodyStream(ctx.body);
      const resBody = await rewriteImports(result);

      ctx.type = 'js';
      ctx.body = resBody;
    }
  })
}

module.exports = moduleRewrite;