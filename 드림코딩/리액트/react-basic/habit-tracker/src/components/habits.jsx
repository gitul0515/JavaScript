import React from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

const Habits = props => {
  const habits = props.habits;
  return (
    <section className='habits'>
      <HabitAddForm
        onAdd={props.onAdd}
      />
      <ul>
        {
          habits.map(habit => (
            <Habit
              key={habit.id} 
              habit={habit} 
              onIncrement={props.onIncrement} 
              onDecrement={props.onDecrement} 
              onDelete={props.onDelete}
            />
          ))
        }
      </ul>
      <button 
        className='btn--reset' 
        onClick={props.onReset}> 
        Reset All
      </button>
    </section>
  )
}

export default Habits;