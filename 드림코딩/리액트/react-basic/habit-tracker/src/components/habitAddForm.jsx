import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
  inputRef = React.createRef();
  formRef = React.createRef();

  onAdd = event => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    if (name === '') return;
    this.props.onAdd(name);
    this.formRef.current.reset();
  }

  render() {
    console.log('HabitAddForm');
    return (
      <form 
        className='form' 
        ref={this.formRef}
        onSubmit={this.onAdd} 
      >
        <input 
          className='form__input' 
          type="text" 
          ref={this.inputRef}
          placeholder='Habit' 
        />
        <button className='form__btn'>Add</button>
      </form>
    );
  }
}

export default HabitAddForm;