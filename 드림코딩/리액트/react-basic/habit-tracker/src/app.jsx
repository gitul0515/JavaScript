import './app.css';
import React, { useCallback, useState } from 'react';
import Header from './components/header';
import Habits from './components/habits';

const App = () => {
  const [habits, setHabits] = useState(
    [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ]
  );

  const handleIncrement = useCallback(habit => {
    setHabits(habits.map(item => {
        if (item.id === habit.id) {
          return {...habit, count: habit.count + 1}
        } else return item;
      })
    );
  }, []);

  const handleDecrement = useCallback(habit => {
    setHabits(habits => 
      habits.map(item => {
        if (item.id === habit.id) {
          const count = habit.count - 1;
          return {...habit, count: count >= 0 ? count : 0}
        }
        return item;
      })
    );
  }, []);

  const handleDelete = useCallback(habit => {
    setHabits(habits => 
      habits.filter(item => item.id !== habit.id)
    );
  }, []);

  const handleReset = useCallback(() => {
    setHabits(habits => 
      habits.map(item => {
        if (item.count === 0) return item;
        return { ...item, count: 0 }
      })
    );
  }, []);

  const handleAdd = useCallback(name => {
    const newId = habits.length + 1;
    setHabits(habits => 
      [...habits, { id: newId, name, count: 0 }]
    );
  }, []);

  return (
    <section className='app'>
      <Header 
        habitTypes={habits.filter(item => item.count >= 1).length}
      />
      <Habits 
        habits={habits} 
        onIncrement={handleIncrement} 
        onDecrement={handleDecrement} 
        onDelete={handleDelete} 
        onAdd={handleAdd} 
        onReset={handleReset} 
      />
    </section>
  )
}

export default App;
