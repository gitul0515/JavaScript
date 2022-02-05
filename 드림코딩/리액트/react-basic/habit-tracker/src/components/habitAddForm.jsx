import React, { memo, useRef } from 'react';

const HabitAddForm = memo(props => { 
  const inputRef = useRef();
  const formRef = useRef();

  const onAdd = event => {
    event.preventDefault();
    const name = inputRef.current.value;
    if (name === '') return;
    props.onAdd(name);
    formRef.current.reset();
  }

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

export default HabitAddForm;
