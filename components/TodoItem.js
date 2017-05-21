import React, { Component } from 'react'

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
        title: this.props.todo.title,
        date: this.props.todo.dueDate
    }
  }

  handleComplete() {
    this.props.actions.completeTodo(this.props.todo.id)
  }

  handleDelete() {
    this.props.actions.deleteTodo(this.props.todo.id)
  }

  handleEdit() {
    this.props.actions.editTodo(this.props.todo.id)
  }

  handleUpdate() {
    this.props.actions.updateTodo(this.props.todo.id, this.state.title)
  }

  handleChange(event) {
    this.setState({
      title: event.target.value
    })
  }

  render() {
    return (
      <li className="todo__item">
        <input type="checkbox"
               hidden={(this.props.todo.updated === true)}
               onClick={this.handleComplete.bind(this)}/>
        <input type="text"
               onChange={this.handleChange.bind(this)}
               className={(this.props.todo.updated === true) ? "" : (this.props.todo.completed === true) ? "__completed__ __readonly__" : "__readonly__"}
               value={this.state.title}/>
        <input type="text"
               value={this.state.dueDate}/>       
        <button onClick={(this.props.todo.updated) ? this.handleUpdate.bind(this): this.handleEdit.bind(this)}>
            {(this.props.todo.updated) ? 'Update' : 'Edit'}
        </button>
        <button onClick={this.handleDelete.bind(this)}>Delete</button>
      </li>
    )
  }

}

export default TodoItem
