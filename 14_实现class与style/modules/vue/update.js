import { compileAttr } from "./compile";

export function attrUpdate (vm, key) {
  const _stylePool = vm.$stylePool;

  for (let [ k, v ] of _stylePool) {
    if (v.expression.indexOf(key) !== -1) {
      compileAttr(vm, k, v.type, v.expression);
    }
  }
}