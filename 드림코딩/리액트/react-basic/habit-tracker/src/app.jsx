import './app.css';
import React, { Component } from 'react';
import Habits from './components/habits';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  state = {
    habitTypes : 0,
    habits : [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Writing', count: 0 },
      { id: 3, name: 'Studying', count: 0 }
    ]
  }

  handleIncrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count + 1;
        return { ...habit, count: count }
      } else return item;
    });
    this.setState({habits});
    if (habit.count === 0) this.handleHabitTypes(+1);
  }
  
  handleDecrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count >= 0 ? count : 0 }
      } else return item;
    })
    this.setState({habits});
    if (habit.count === 1) this.handleHabitTypes(-1);
  }
  
  handleDelete = habit => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits});
    if (habit.count !== 0 ) this.handleHabitTypes(-1);
  }

  handleHabitTypes = (num) => {
    const habitTypes = this.state.habitTypes + num;
    this.setState({habitTypes: habitTypes >= 0 ? habitTypes : 0});
  }

  handleAdd = event => {
    event.preventDefault();
    const input = document.querySelector('.form__input');
    if (input.value === '') return;

    const habits = [...this.state.habits];
    const newId = habits.length + 1;
    const newName = input.value;
    const newhabit = { id: newId, name: newName, count: 0 }
    habits.push(newhabit);
    this.setState({habits});
    input.value = '';
  }

  handleReset = () => {
    const habits = this.state.habits.map(item => {
      return { ...item, count : 0 }
    });
    this.setState({habits});
    this.setState({habitTypes: 0});
  }

  render() {
    return (
      <section className='app'>
        <header className='header'>
          <FontAwesomeIcon className='header__icon' icon={faLeaf} />
          <span className='header__title'>Habit Tracker</span>
          <span className='header__habit-types'>{this.state.habitTypes}</span>
        </header>

        <form className='form' onSubmit={this.handleAdd}>
          <input className='form__input' type="text" placeholder='Habit'/>
          <button className='form__btn'>Add</button>
        </form>

        <Habits 
          habits={this.state.habits}
          onIncrement = {this.handleIncrement}
          onDecrement = {this.handleDecrement}
          onDelete = {this.handleDelete}
        />

        <button className='btn-reset' onClick={this.handleReset}>Reset All</button>
      </section>
    )
  }
}

export default App;
