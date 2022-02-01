import React, { Component } from 'react';

class HabitAddForm extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();

  onAdd = event => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    if (name === '') return;
    this.props.onAdd && this.props.onAdd(name);
    this.formRef.current.reset();
  }

  render() {
    return (
      <form className='form' onSubmit={this.onAdd} ref={this.formRef}>
        <input 
          className='form__input' 
          type="text" 
          ref = {this.inputRef}
          placeholder='Habit' 
        />
        <button className='form__btn'>Add</button>
      </form>
    );
  }
}

export default HabitAddForm;