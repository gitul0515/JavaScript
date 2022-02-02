import './app.css';
import React, { Component } from 'react';
import Header from './components/header';
import Habits from './components/habits';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ]
  }

  onIncrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return {...habit, count: habit.count + 1}
      } else return item;
    })
    this.setState({habits});
  }

  onDecrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return {...habit, count: count >= 0 ? count : 0}
      }
      return item;
    })
    this.setState({habits});
  }

  onDelete = habit => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits});
  }

  onReset = () => {
    const habits = this.state.habits.map(item => {
      return { ...item, count: 0 }
    })
    this.setState({habits});
  }

  onAdd = name => {
    const newId = this.state.habits.length + 1;
    const habits = [...this.state.habits, { id: newId, name, count: 0 }];
    this.setState({habits});
  }

  render() {
    return (
      <section className='app'>
        <Header 
          habitTypes={this.state.habits.filter(item => item.count >= 1).length}
        />
        <Habits 
          habits={this.state.habits} 
          onIncrement={this.onIncrement} 
          onDecrement={this.onDecrement} 
          onDelete={this.onDelete} 
          onAdd={this.onAdd} 
          onReset={this.onReset} 
        />
      </section>
    )
  }
}

export default App;
