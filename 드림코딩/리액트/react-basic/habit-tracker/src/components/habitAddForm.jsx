import React, { memo } from 'react';

export default memo(function HabitAddForm(props) { 
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onAdd = event => {
    event.preventDefault();
    const name = inputRef.current.value;
    if (name === '') return;
    props.onAdd(name);
    formRef.current.reset();
  }

  console.log('add');

  return (
    <form 
      className='form' 
      ref={formRef}
      onSubmit={onAdd} 
    >
      <input 
        className='form__input' 
        type="text" 
        ref={inputRef}
        placeholder='Habit' 
      />
      <button className='form__btn'>Add</button>
    </form>
  );
});

