import { attrUpdate } from "./update";

export function reactive (vm, target) {
  for (let key in target) {
    Object.defineProperty(vm, key, {
      get () {
        return target[key];
      },
      set (newValue) {
        if (target[key] === newValue) return;
        target[key] = newValue;
        attrUpdate(vm, key);
      }
    })
  }
}