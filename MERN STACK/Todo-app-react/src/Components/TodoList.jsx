import React from 'react'
import Todo from './Todo'

function TodoList({todos,removeTodo,markcomplete}) {
  return (

    <div>
        {todos.map(todo=>
        <Todo removeTodo={removeTodo} key={todo.id} todo={todo} markcomplete={markcomplete}/>
    )}
    </div>
  )
}

export default TodoList