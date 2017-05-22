function getId(state) {
  return state.todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

let reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [{
          title: action.title,
          description: action.description,
          dueDate: action.dueDate,
          completed: false,
          updated: false,
          display: true,
          id: getId(state)
        }, ...state.todos]
      })
    case 'COMPLETE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
          return todo.id === action.id ?
              Object.assign({}, todo, {updated: false, completed: ! todo.completed}) : todo
        })
      })
    case 'DELETE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.filter((todo) => {
          return todo.id !== action.id
        })
      })
    case 'EDIT_TODO':
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
          return todo.id === action.id ?
            Object.assign({}, todo, {updated: !todo.updated}) : Object.assign({}, todo, {updated: false})
        })
      })
    case 'UPDATE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
          return todo.id === action.id ?
            Object.assign({}, todo, {title: action.title, description: action.description, dueDate: action.dueDate, updated: false}) : todo
        })
      })
    case 'SHOW_ALL': 
       return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
            return Object.assign({}, todo, {display: true})
        })
      })
    case 'SHOW_ACTIVE': 
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
          return todo.completed !== true  ? 
            Object.assign({}, todo, {display: true}) : Object.assign({}, todo, {display: false})
        })
      })
    case 'SHOW_COMPLETED': 
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
          return todo.completed === true  ? 
            Object.assign({}, todo, {display: true}) : Object.assign({}, todo, {display: false})
        })
      })
    default: 
      return state;
  }
}

export default reducer
