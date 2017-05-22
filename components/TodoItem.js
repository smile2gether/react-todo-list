import React, { Component } from 'react'
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css';
import FaEdit from 'react-icons/lib/fa/edit'
import FaCheck from 'react-icons/lib/fa/check'
import FaClose from 'react-icons/lib/fa/close'

class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
        title: this.props.todo.title,
        description: this.props.todo.description,
        dueDate: this.props.todo.dueDate,
        focused: false,
        checked: this.props.todo.completed
    }
  }

  handleComplete() {
    this.props.actions.completeTodo(this.props.todo.id)
    this.setState({
      checked: !this.state.checked
    })
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

  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    })
  }

  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value
    })
  }

  handleDueDateChange(event) {
    console.log(event);
    this.setState({
        dueDate: event
    })
  }
  
  handleFocusChange(event) {
    console.log(event);
    this.setState({
      focused: ((this.props.todo.updated === true) ? event.focused : this.state.focused)
    })
  }

  render() {
    return (
      <li className="todo__item">
        <input type="checkbox"
               defaultChecked={this.state.checked}
               required={true}
               placeholder='description'
               hidden={(this.props.todo.updated === true)}
               onClick={this.handleComplete.bind(this)}/>
        <input type="text"
               onChange={this.handleTitleChange.bind(this)}
               className={(this.props.todo.updated === true) ? "" : (this.props.todo.completed === true) ? "__completed__ __readonly__" : "__readonly__"}
               value={this.state.title}/>
       <input type="text"
              hidden={(this.props.todo.updated !== true)}
              placeholder='description'
              className={(this.props.todo.updated === true) ? "" : (this.props.todo.completed === true) ? "__completed__ __readonly__" : "__readonly__"}
              onChange={this.handleDescriptionChange.bind(this)}
              value={this.state.description}/>
        <SingleDatePicker
            date={this.state.dueDate}
            onDateChange={ this.handleDueDateChange.bind(this)}
            placeholder='date reminder'
            focused={this.state.focused} 
            onFocusChange={this.handleFocusChange.bind(this)} 
          />
        <button onClick={(this.props.todo.updated) ? this.handleUpdate.bind(this): this.handleEdit.bind(this)}>
            {(this.props.todo.updated) ? <FaCheck/> : <FaEdit/>}
        </button>
        <button onClick={this.handleDelete.bind(this)}><FaClose/></button>
      </li>
    )
  }

}

export default TodoItem
