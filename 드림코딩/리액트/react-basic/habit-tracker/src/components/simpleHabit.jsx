import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, } from "@fortawesome/free-solid-svg-icons";

const SimpleHabit = props => {
  const [count, countState] = useState(0);

  const handleIncrement = () => {
    countState(count + 1);
  };

  console.log();

  return (
    <li className="habit">
      <span className="habit__name">Reading</span>
      <span className="habit__count">{count}</span>
      <button
        className="habit__btn habit__btn--plus"
        onClick={handleIncrement}
      >
        <FontAwesomeIcon icon={faPlusSquare}/>
      </button>
    </li>
  );
}

export default SimpleHabit;
