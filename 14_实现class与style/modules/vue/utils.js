import { REG_UPPERCASE } from "./regular";

export function isObject (value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

export function transformToKebab (key) {
  return key.replace(REG_UPPERCASE, '-$1').toLowerCase();
}