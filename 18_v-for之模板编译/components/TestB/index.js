import { createReactive } from '../../modules';


const template = `
  <ul class="list">
    <h1>{{ title }}</h1>
    {{ dateTime }}
    <for data="list" tag="li" class="item">
      <span>Name：{ name }</span>
      <span>Age：{ age }</span>
    </for>
  </ul>
`;

function TestB () {
  const state = createReactive({
    title: '老师信息列表',
    dateTime: '2021-02-03 10:26',
    list: [
      {
        id: 1,
        name: '小明',
        age: 26
      },
      {
        id: 2,
        name: '小红',
        age: 28
      },
      {
        id: 3,
        name: '小李',
        age: 40
      },
    ]
  });

  return [ template, state ];
}

export default TestB;