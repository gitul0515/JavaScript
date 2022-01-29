import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  state = {
    habits: [
      { key: 1, name: 'Reading', count: 0 },
      { key: 2, name: 'Writing', count: 0 },
      { key: 3, name: 'Coding', count: 0 },
    ]
  }
  render() {
    return (
      <ul>
        {
          this.state.habits.map(habit => (
            <Habit habit={habit}/>
          ))
        }
      </ul>
    );
  }
}

export default Habits;