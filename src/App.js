import React, {useEffect, useState} from 'react';
import './App.css';
import Form from './component/Form';
import TodoList from './component/TodoList';


function App() {
  // State
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterTodos, setFilterTodos] = useState([]);


  // Use Effect
  useEffect(()=>{
    getLocalTodos();
    
  }, [])

  useEffect( () => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

 

  const filterHandler = () => {
    switch(status) {
      case 'all':
        setFilterTodos(todos.filter( todo => todo));
        break;
      case 'completed':
        setFilterTodos(todos.filter( todo => todo.completed === true));
        break;
      case 'unCompleted':
        setFilterTodos(todos.filter( todo => todo.completed === false));
        break;
      default:
        setFilterTodos(todos)
        break;
        
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    }else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }

  // Function

    return (
      <div className='App'>
        <header>
          <h1>Ed's Todo List </h1>
        </header>
        <Form  
          setInputText={setInputText} 
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus}
          />
        <TodoList 
          todos={todos}  
          setTodos={setTodos} 
          filterTodos={filterTodos}
          />
      </div>
    )
}

export default App;



