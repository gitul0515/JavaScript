import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Writing', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ]
  }

  handleIncrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return {...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({habits: habits});
  };
  
  handleDecrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return {...habit, count: count >= 0 ? count : 0 };
      }
      return item;
    })
    this.setState({habits: habits});
  };
  
  handleDelete = habit => {
    const habits = [...this.state.habits];
    const habitIndex = habits.indexOf(habit);
    habits.splice(habitIndex, 1);
    this.setState({habits: habits});
  };
  
  render() {
    return (
      <ul>
        {
          this.state.habits.map(habit => (
            <Habit 
              key = {habit.id} 
              habit = {habit} 
              onIncrement = {this.handleIncrement}
              onDecrement = {this.handleDecrement}
              onDelete = {this.handleDelete}
            /> 
          ))
        }
      </ul>
    );
  }
}

export default Habits;