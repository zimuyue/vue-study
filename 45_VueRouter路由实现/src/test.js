const data = [
  {
    id: 1,
    pid: 0,
    name: 'top_1'
  },
  {
    id: 11,
    pid: 1,
    name: 'top_1_1'
  },
  {
    id: 111,
    pid: 11,
    name: 'top_1_1_1'
  },
  {
    id: 112,
    pid: 11,
    name: 'top_1_1_2'
  },
  {
    id: 2,
    pid: 0,
    name: 'top_2'
  },
  {
    id: 21,
    pid: 2,
    name: 'top_2_1'
  },
  {
    id: 22,
    pid: 2,
    name: 'top_2_2'
  },
]

function fromDataToTree (list) {
  const parentList = list.filter(item => item.pid === 0),
        childList = list.filter(item => item.pid !== 0);

  dataToTree(parentList, childList);

  function dataToTree (parent, children) {
    parent.forEach(p => {
      children.forEach((c, i) => {
        if (c.pid === p.id) {
          const _c = JSON.parse(JSON.stringify(children));
          _c.splice(i, 1);
          dataToTree([c], _c);

          if (p.children) {
            p.children.push(c);
          } else {
            p.children = [c];
          }
        }
      })
    })
  }

  return parentList;
}

console.log(fromDataToTree (data));
