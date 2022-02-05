import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { memo } from 'react';

const Header = memo(props => {
  console.log('header');
  return (
    <header className='header'>
      <FontAwesomeIcon className='header__icon' icon={faLeaf}/>
      <span className='header__title'>Habit Tracker</span>
      <span className='header__habit-types'>{props.habitTypes}</span>
    </header>
  )
})

export default Header;