import React, { Component } from 'react'

class TodoItem extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
        inputText: this.props.todo.text,
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
    this.props.actions.updateTodo(this.props.todo.id, this.state.inputText)
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
  }

  render() {
    return (
      <li className="todo__item">
        <input type="checkbox"
               hidden={(this.props.todo.updated === true)}
               onClick={this.handleComplete.bind(this)}/>
        <input type="text"
               onDoubleClick={this.handleEdit.bind(this)}
               onChange={this.handleChange.bind(this)}
               className={(this.props.todo.updated === true) ? "" : (this.props.todo.completed === true) ? "__completed__ __readonly__" : "__readonly__"}
               value={this.state.inputText}/>
        <button hidden={(this.props.todo.updated !== true)}
                onClick={this.handleUpdate.bind(this)}>
            Update
        </button>
        <button onClick={this.handleDelete.bind(this)}>Delete</button>
      </li>
    )
  }

}

export default TodoItem
