const { Readable } = require('stream');

const {
  parse: esModuleParse
} = require('es-module-lexer');

const MagicString = require('magic-string');

async function readBodyStream (bodyStream) {

  if (bodyStream instanceof Readable) {
    let result = '';

    return new Promise(resolve => {
      bodyStream.on('data', (chunk) => result += chunk);
      bodyStream.on('end', () => resolve(result)); 
    })
  }
  
  return bodyStream;
}

async function rewriteImports (source) {
  const imports = esModuleParse(source)[0];
  const magicString = new MagicString(source);

  if (imports.length > 0) {
    imports.forEach(_import => {
      const { s, e } = _import;
      let importId = source.slice(s, e);
      
      if (/^[^\.\/]/.test(importId)) {
        importId = vueNodeModulePath('runtime-dom', moduleMapping(importId));
        magicString.overwrite(s, e, importId);
      }
    })
  }

  return magicString.toString();
}

function moduleMapping (importId) {
  switch (importId) {
    case 'vue':
      return 'runtime-dom.esm-browser.js';
    default:
      break;
  }
}

function vueNodeModulePath (package, filename) {
  console.log(filename);
  return `/node_modules/@vue/${ package }/dist/${ filename }`;
}

module.exports = {
  readBodyStream,
  rewriteImports,
  vueNodeModulePath
}