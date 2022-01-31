import './app.css';
import React, { Component } from 'react';
import Habits from './components/habits';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  state = {

  }
  render() {
    return (
      <section className='app'>
        <header className='header'>
          <FontAwesomeIcon className='header__icon' icon={faLeaf} />
          <span className='header__title'>Habit Tracker</span>
          <span className='header__habit-name-count'>0</span>
        </header>

        <form className='form'>
          <input className='form__input' type="text" placeholder='Habit'/>
          <button className='form__btn'>Add</button>
        </form>

        <Habits />

        <button className='btn-reset'>Reset All</button>
      </section>
    )
  }
}

export default App;
