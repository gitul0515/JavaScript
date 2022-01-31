import './app.css';
import React, { Component } from 'react';
import Habits from './components/habits';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  state = {
    habits : [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Writing', count: 0 },
      { id: 3, name: 'Studying', count: 0 }
    ]
  }

  handleIncrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 }
      } else return item;
    });
    this.setState({habits});
  }
  
  handleDecrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const decresedCount = habit.count - 1;
        return { ...habit, count: decresedCount >= 0 ? decresedCount : 0 }
      } else return item;
    })
    this.setState({habits});
  }
  
  handleDelete = habit => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits});
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
  }

  render() {
    return (
      <section className='app'>
        <header className='header'>
          <FontAwesomeIcon className='header__icon' icon={faLeaf} />
          <span className='header__title'>Habit Tracker</span>
          <span className='header__habit-name-count'>0</span>
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
