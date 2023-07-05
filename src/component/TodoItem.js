import React from 'react'

function TodoItem({text, setTodos, todos, todo}) {

    const deleteHandler = (e) => {
        e.target.parentNode.classList.add('fall');
        e.target.parentNode.addEventListener('transitionend', ()=>{
            setTodos(todos.filter((el) => el.id !== todo));
        })
  
    }
    const toggleHandler = (e) => {
        e.target.parentNode.classList.toggle('completed');
        setTodos(todos.map((el) => {
            if(el.id === todo) {
                return {
                    ...el,
                    completed: !el.completed
                }
            }
            return el;
        } ));
    }
    
    return (
        <div className={`todo `}>
            <li className="todo-item" >{text}</li>
            <button onClick={toggleHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default TodoItem;