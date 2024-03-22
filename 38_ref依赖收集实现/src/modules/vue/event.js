export function bindEvent (methods, nodes) {
  nodes.forEach(el => {
    const handleName = el.getAttribute('@click');

    if (handleName) {
      el.addEventListener('click', methods[handleName].bind(this), false);
    }
  })
}