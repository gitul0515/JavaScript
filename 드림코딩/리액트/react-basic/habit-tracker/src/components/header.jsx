import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <FontAwesomeIcon className='header__icon' icon={faLeaf} />
        <span className='header__title'>Habit Tracker</span>
        <span className='header__habit-types'>{this.props.habitTypes}</span>
      </header>
    );
  }
}

export default Header;