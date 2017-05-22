import React, { Component } from 'react'
import FaPlus from 'react-icons/lib/fa/plus'

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates'
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';

class TodoInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      dueDate: null,
      focused: false
    }
  }

  handleTitleChange(event) {
    console.log(event);
    this.setState({
      title: event.target.value
    })
  }

  handleDescriptionChange(event) {
    console.log(event);
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
      focused: event.focused
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    
    this.props.addTodo(this.state.title, this.state.description, this.state.dueDate)
    
    //reset input box
    this.setState({
      title: '',
      description: '',
      dueDate: null
    })
  }

  render() {
    return (
      <div>
          <input
            type="text"
            placeholder="title ..."
            value={this.state.title}
            onChange={this.handleTitleChange.bind(this)}
          />
           <input
            type="text"
            placeholder="description"
            value={this.state.description}
            onChange={this.handleDescriptionChange.bind(this)}
          />          
          <SingleDatePicker
            placeholder='date reminder'
            date={this.state.dueDate} 
            onDateChange={ this.handleDueDateChange.bind(this)}
            focused={this.state.focused} 
            onFocusChange={this.handleFocusChange.bind(this)} 
          />          
          <button onClick={this.handleSubmit.bind(this)}><FaPlus /></button>
      </div>
    )
  }

}

export default TodoInput
