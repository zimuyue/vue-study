const { ref } = Vue;

// 抽离功能组合API生成Hook函数
export function useTitle () {
  // refAPI将数据包装成响应式对象
  // 通过.value来访问数据值
  const title = ref('This is My Title');
  const setTitle = () => title.value = 'Change My Title';

  return [
    title,
    setTitle
  ]
}
