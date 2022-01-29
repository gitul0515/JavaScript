import React, { Component } from 'react';
import { faPlusSquare, faMinusSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Habit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }

    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
  }

  increaseCount () {
    this.setState({count: this.state.count + 1});
  }

  decreaseCount () {
    const decreasedCount = this.state.count - 1;
    this.setState({count: decreasedCount < 0 ? 0 : decreasedCount});
  }

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className='habit'>
        <span className='habit-name'>{name}</span>
        <span className='habit-count'>{count}</span>
        <button 
          className='habit-btn habit-btn--plus' 
          onClick={this.increaseCount}>
          <FontAwesomeIcon icon={faPlusSquare} />
        </button>
        <button 
          className='habit-btn habit-btn--minus' 
          onClick={this.decreaseCount}>
          <FontAwesomeIcon icon={faMinusSquare} />
        </button>
        <button 
          className='habit-btn habit-btn--trash'>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </li>
    );
  }
}

export default Habit;