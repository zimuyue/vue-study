export function render (refsMap) {
  for (let key in refsMap) {
    _render(refsMap[key]);
  }
}

export function update (ref) {
  _render(ref);
}

export function _render ({ deps, value }) {
  deps.forEach(el => {
    el.textContent = value;
  })
}
