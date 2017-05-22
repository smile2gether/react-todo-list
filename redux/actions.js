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

    updateTodo: function (id, title, description, dueDate) {
    return {
      type: 'UPDATE_TODO',
      id: id,
      title: title,
      description: description,
      dueDate: dueDate

    }
  },

  showAll : function() {
    return {
      type: 'SHOW_ALL'
    }
  },

  showActive : function() {
    return {
      type: 'SHOW_ACTIVE'
    }
  },

  showCompleted : function() {
    return {
      type: 'SHOW_COMPLETED'
    }
  }
  
}

export default actions
