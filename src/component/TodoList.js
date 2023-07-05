import React from 'react'
import TodoItem from './TodoItem'


function TodoList({todos, setTodos, filterTodos}) {

  return (
    <div className="todo-container">
        <ul className="todo-list">
           {filterTodos.map(item => (
            <TodoItem 
                key={item.id} 
                setTodos={setTodos} 
                todos={todos} 
                todo={item.id}
                text={item.text} />
           ))}
        </ul>
    </div>
  )
}

export default TodoList