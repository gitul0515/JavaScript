import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
  render() {
    const habits = this.props.habits;
    return (
      <section className='habits'>
        <HabitAddForm
          onAdd={this.props.onAdd}
        />
        <ul>
          {
            habits.map(habit => (
              <Habit
                key={habit.id} 
                habit={habit} 
                onIncrement={this.props.onIncrement} 
                onDecrement={this.props.onDecrement} 
                onDelete={this.props.onDelete}
              />
            ))
          }
        </ul>
        <button 
          className='btn--reset' 
          onClick={this.props.onReset}> 
          Reset All
        </button>
      </section>
    )
  }
}

export default Habits;