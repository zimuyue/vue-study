const { getOptions } = require('loader-utils');

// tplLoader本质上是一个函数，它会返回一个模板字符串
// 将.tpl后缀的文件转化为html模板字符串
// 是在webpack工程化打包时调用这个函数来处理这类文件
function tplLoader (source) {
  
  const { consoleLog } = getOptions(this);

  if (consoleLog) {
    return `
      export default (component, { template, data, methods }) => {

        if (Object.prototype.toString.call(component) !== '[object Object]') {
          throw new Error('component must be the type of Object.');
        }

        if (template) {
          console.log(\`${source}\`);
        }

        if (component.data && data) {
          console.log(component.data());
        }

        if (component.methods && methods) {
          console.log(component.methods);
        }

        component.template = \`${source}\`;

        return component;
      }
    `
  } else {
    return `
      export default (component, { template, data, methods }) => {

        if (Object.prototype.toString.call(component) !== '[object Object]') {
          throw new Error('component must be the type of Object.');
        }

        component.template = \`${source}\`;

        return component;
      }
    `
  }
}

module.exports = tplLoader;