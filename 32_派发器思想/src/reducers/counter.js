// reducer 真正的工作者计算数据
function counterReducer (data) {
  function plus () {
    return ++ data.result;
  }
  function minus () {
    return -- data.result;
  }

  return {
    plus,
    minus
  }
}

export default counterReducer;