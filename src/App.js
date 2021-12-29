import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Count from './components/Count';
import {currentDay} from './constants/date';
import FilterButton from './components/FilterButton';


// https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
}

const FILTER_NAMES = Object.keys(FILTER_MAP);


function App() {

const [initialTitle, setInitialTitle] = useState([]);
const [counter, setCounter] = useState(0);
const [filter, setFilter] = useState('All');

const receivedInputHandler = (userInputValue) => {

const wholeUserEneteredData = {
  id: currentDay + Math.random().toString(),
  // date: currentDay,
  title: userInputValue,
  completed: false
}

  setInitialTitle(
    prevInitialTitle => {
      return [...prevInitialTitle, wholeUserEneteredData];
    }
  )
}


const itemDeleteHandler = (id) => {
  
  const newList = initialTitle.filter((item) => item.id !== id);
 
  setInitialTitle(newList);
}

const clearCompleteHandler = () => {
  const newList = initialTitle.filter(item  => !item.completed);
  setInitialTitle(newList);
}
// --------------
function completeHandler(id) {
  const newList = initialTitle.map(task => {
    if (id === task.id) {
      return {...task, completed: !task.completed}
    }

    return task;
  });
  setInitialTitle(newList);
}

const itemEditHandler = (id, newTitle) => {

  const newList = initialTitle.map(task => {
    if (id === task.id) {
      return {...task, title: newTitle}
    }
  
    return task;
  });

  setInitialTitle(newList);
}
  
  useEffect(() => {
    const newList = initialTitle.filter((item) => item.completed === true);
    const count = initialTitle.length - newList.length;
    setCounter(count);
  }, [initialTitle]);
  
  const completedAllHandler = () => {

    const newList = initialTitle.map(item => {
      return {...item, completed: true}
    })

    setInitialTitle( newList )
  }

  return (
    <section className="todoapp">
    <header className="header">
      <h1>todos</h1>

      <Form onSaveUserValue={receivedInputHandler}/>

    </header>

    <section className="main">
      <input 
        type="checkbox" 
        id="toggle-all" 
        className="toggle-all" 
        onClick={completedAllHandler}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <TodoList 
        listOfTodos={initialTitle} 
        onDeleteItem={itemDeleteHandler}
        onCompleted={completeHandler}
        onEditItem={itemEditHandler}
        FILTER_MAP={FILTER_MAP}
        filter={filter}
      />
    </section>
{initialTitle && initialTitle.length > 0 &&
    <footer className="footer">
      <Count counter={counter}/>
    
      <ul className="filters">
        {FILTER_NAMES.map(name => (
          <FilterButton 
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
          />
        ))}
      </ul>

      <button 
        type="button" 
        className="clear-completed" 
        onClick={clearCompleteHandler}>
        Clear completed
      </button>
    </footer>
}
  </section>
  );
}

export default App;
