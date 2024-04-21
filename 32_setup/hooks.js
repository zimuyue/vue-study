const { ref } = Vue;

// 抽离功能组合 API 生成 Hook 函数
export function useTitle () {
  // refAPI 将数据包装成响应式对象
  // 通过 .value 来访问数据值
  const title = ref('This is My Title');
  const setTitle = () => title.value = 'Change My Title';

  return [
    title,
    setTitle
  ]
}
