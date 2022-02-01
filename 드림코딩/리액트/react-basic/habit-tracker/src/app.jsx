import './app.css';
import React, { Component } from 'react';
import Header from './components/header';
import Habits from './components/habits';

class App extends Component {
  state = {
    habits : [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Writing', count: 0 },
      { id: 3, name: 'Studying', count: 0 }
    ]
  }

  onIncrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count + 1;
        return { ...habit, count: count }
      } else return item;
    });
    this.setState({habits});
  }
  
  onDecrement = habit => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count >= 0 ? count : 0 }
      } else return item;
    })
    this.setState({habits});
  }
  
  onDelete = habit => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits});
  }

  onAdd = name => {
    const habits = [...this.state.habits];
    const newId = habits.length + 1;
    const newhabit = { id: newId, name, count: 0 }
    habits.push(newhabit);
    this.setState({habits});
  }

  onReset = () => {
    const habits = this.state.habits.map(item => {
      return { ...item, count : 0 }
    });
    this.setState({habits});
  }

  render() {
    return (
      <section className='app'>
        <Header 
          habitTypes = {this.state.habits.filter(item => item.count > 0).length}
        />
        <Habits 
          habits={this.state.habits}
          onAdd = {this.onAdd}
          onIncrement = {this.onIncrement}
          onDecrement = {this.onDecrement}
          onDelete = {this.onDelete}
          onReset = {this.onReset}
        />
      </section>
    )
  }
}

export default App;
