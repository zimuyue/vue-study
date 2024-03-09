import { parseHtmlToAst } from './astParser';
import { generate } from './generate';

function compileToRenderFunction (html) {
  const ast = parseHtmlToAst(html),
        code = generate(ast),
        // 通过with表达式来指定具体的作用域
        // 好处就是不需要使用this/vm去指定内部运行的变量取值问题
        render = new Function(`
          with(this){ return ${code} }
        `);
  return render;
}

export {
  compileToRenderFunction
}