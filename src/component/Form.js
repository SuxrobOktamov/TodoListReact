import React, { useRef, useState } from 'react';

function Form ({setInputText , inputText, todos, setTodos, setStatus}) {

    //here i can write javascript code and function

    const inputVal = useRef();
    const inputTextHandler =(e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
       
        setTodos(
            [
                ...todos,
                { text: inputText, completed: false, id:Math.random()*1000 }
            ]
        );
        
        inputVal.current.value = '';
    }




    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

  return (
    <form onSubmit={submitTodoHandler} >
        <input 
            ref={inputVal} 
            onChange={inputTextHandler} 
            type="text" required 
            className="todo-input" />
        <button className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select onChange={statusHandler} name="todos" id="todo" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="unCompleted">Uncompleted</option>
            </select>
        </div>
    </form>
  )
}

export default Form;