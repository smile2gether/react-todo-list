let actions = {
  addTodo: function(title, description, dueDate) {
    return {
      type: 'ADD_TODO',
      title: title,
      description: description,
      dueDate: dueDate
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

  updateTodo: function (id, title) {
    return {
      type: 'UPDATE_TODO',
      id: id,
      title: title
    }
  }
}

export default actions
