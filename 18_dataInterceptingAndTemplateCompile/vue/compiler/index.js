import { parseHtmlToAst } from './astParser.js';
import { generate } from './generate.js';

function compileToRenderFunction (html) {
  const ast = parseHtmlToAst(html),
        code = generate(ast),
        // 通过 with 表达式来指定具体的作用域
        // 好处就是不需要使用 this/vm 去指定内部运行的变量取值问题
        render = new Function(`
          with(this){ return ${code} }
        `);
  return render;
}

export {
  compileToRenderFunction
}