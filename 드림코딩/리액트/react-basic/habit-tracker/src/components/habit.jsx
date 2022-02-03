import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

class Habit extends PureComponent {
  componentDidMount() {
    console.log('Hi');
  }

  componentWillUnmount() {
    console.log('Bye');
  }

  componentDidUpdate() {
    console.log('New');
  }

  onIncrement = () => {
    this.props.onIncrement(this.props.habit);
  }

  onDecrement = () => {
    this.props.onDecrement(this.props.habit);
  }

  onDelete = () => {
    this.props.onDelete(this.props.habit);
  }

  render() {
    const habit = this.props.habit;
    return (
      <li className='habit'>
        <span className='habit__name'>{habit.name}</span>
        <span className='habit__count'>{habit.count}</span>
        <button className='habit__btn habit__btn--plus'
          onClick={this.onIncrement}>
          <FontAwesomeIcon icon={faPlusSquare}/>
        </button>
        <button className='habit__btn habit__btn--minus'
          onClick={this.onDecrement}>
          <FontAwesomeIcon icon={faMinusSquare}/>
        </button>
        <button className='habit__btn habit__btn--trash'
          onClick={this.onDelete}>
          <FontAwesomeIcon icon={faTrash}/>
        </button>
      </li>
    )
  }
}

export default Habit;