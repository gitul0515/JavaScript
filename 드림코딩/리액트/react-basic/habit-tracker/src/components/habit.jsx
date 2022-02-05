import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const Habit = memo(props => {
  const onIncrement = () => {
    props.onIncrement(props.habit);
  }

  const onDecrement = () => {
    props.onDecrement(props.habit);
  }

  const onDelete = () => {
    props.onDelete(props.habit);
  }

  const habit = props.habit;
  return (
    <li className='habit'>
      <span className='habit__name'>{habit.name}</span>
      <span className='habit__count'>{habit.count}</span>
      <button className='habit__btn habit__btn--plus'
        onClick={onIncrement}>
        <FontAwesomeIcon icon={faPlusSquare}/>
      </button>
      <button className='habit__btn habit__btn--minus'
        onClick={onDecrement}>
        <FontAwesomeIcon icon={faMinusSquare}/>
      </button>
      <button className='habit__btn habit__btn--trash'
        onClick={onDelete}>
        <FontAwesomeIcon icon={faTrash}/>
      </button>
    </li>
  )
});

export default Habit;