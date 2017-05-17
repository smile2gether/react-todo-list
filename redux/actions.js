let actions = {
  addTodo: function(text) {
    return {
      type: 'ADD_TODO',
      text: text
    }
  },

  completeTodo: function(id) {
    return {
      type: 'COMPLETE_TODO',
      id: id
    }
  },

  deleteTodo: function(id) {
    return {
      type: 'DELETE_TODO',
      id: id
    }
  },

  editTodo: function (id) {
    return {
      type: 'EDIT_TODO',
      id: id,
    }
  },

  updateTodo: function (id, text) {
    return {
      type: 'UPDATE_TODO',
      id: id,
      text: text
    }
  }
}

export default actions
