function todoListReducer (data) {
  function addItem (newItem) {
    return data.concat(newItem)
  }

  function removeItem (id) {
    return data.filter(todo => todo.id !== id);
  }

  function changeCompleted (id) {
    return data.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
  }

  return {
    addItem,
    removeItem,
    changeCompleted
  }
}

export default todoListReducer;