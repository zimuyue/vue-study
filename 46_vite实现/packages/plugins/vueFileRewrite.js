const {
  join
} = require('path');

const {
  readFileSync
} = require('fs');

const {
  vueNodeModulePath
} = require('../../shared/utils');

async function vueFileRewrite ({ app, appPath }) {
  app.use(async (ctx, next) => {
    if (!ctx.path.endsWith('.vue')) {
      return next();
    }
    
    const vuePath = join(appPath, ctx.path);
    const vueContent = readFileSync(vuePath, 'utf8');
    const { parse, compileTemplate } = require(join(appPath, vueNodeModulePath('compiler-sfc', 'compiler-sfc.cjs.js')))
    const { descriptor: { template, script } } = parse(vueContent);

    ctx.type = 'js';

    if (!ctx.query.type) {
      let source = '';

      script && (source += scriptRewrite(script));
      template && (source += templateRewrite(ctx.path));
      source += `\nexport default $script`;
      
      ctx.body = source;
    }

    if (ctx.query.type === 'template') {
      ctx.body = templateCompile(template, ctx.path, compileTemplate); 
    }
  })
}

function scriptRewrite (script) {
  const { content } = script;

  return content.replace(/((?:^|\n|\;)\s*) export default/, '$1const $script = ');
}

function templateRewrite (path) {
  return `
    \nimport { render as __render } from "${ path }?type=template"
    \n$script.render = __render
  `
};

function templateCompile ({ content }, path, compileTemplate) {
  const source = content;
  const id = path;
  return compileTemplate({
    id,
    source
  }).code;
}

module.exports = vueFileRewrite;

// single file component    .vue   .js

/**
 * import { render } from 'App.vue?type=template'
 * 
 * const $script = {
 *   name: 'App',
 *   components: {
 *     Counter
 *   },
 *   render: render
 * }
 * 
 * 
 */