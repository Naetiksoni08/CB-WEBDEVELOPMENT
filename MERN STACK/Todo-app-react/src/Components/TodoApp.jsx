import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuid } from "uuid"
import TodoList from './TodoList'

function TodoApp() {
    const dummy_todo = [
        { id: uuid(), text: "Learn Js", completed: false },
        { id: uuid(), text: "Learn React", completed: false },
        { id: uuid(), text: "Learn Express", completed: true },
        { id: uuid(), text: "Learn Java", completed: false },
        { id: uuid(), text: "Learn Cp", completed: false }

    ]
    const [todos, SetTodos] = useState(dummy_todo); // current state todos and set todos is used to update the state 


    const addTodo = (text) => {
        SetTodos([...todos, { id: uuid(), text, completed: false }]); // copy eveyrthing from the current statte and make a new array and add this todo to it 


        // wrong practice (not recommended)
        // const newTodos = todos;
        // newTodos.push({id: uuid, text, completed:false })


        // setTodos([...todos, { id: uuid, text, completed: false }]);
        // setTodos(newTodos);
    };


    function removeTodo(todoid) {
        const newtodos = todos.filter(todo => todo.id !== todoid); // filtered out all those todos whose id doesnt match with our todo id like baki saree todo mangwa liye joh match nai karte 
        SetTodos(newtodos);
    }


    function markcomplete(todoid) {
        const newtodos = todos.map(todo=>todo.id === todoid ? { ...todo,completed:!todo.completed}:todo); 
        // todos.map(todo => {
        //     if (todo.id === id) {
        //         return {
        //             // id: todo.id,
        //             // text: todo.text,
        //             ...todo,
        //             completed: !completed
        //         }
        //     } else {
        //         return todo;
        //     }
        // })
        SetTodos(newtodos); 


    }

    return (
        <div>
            {/* <TodoForm todos={todos}/> */}
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} removeTodo={removeTodo} markcomplete={markcomplete} />
        </div>

    )
}

export default TodoApp