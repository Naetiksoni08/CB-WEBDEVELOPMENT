import React from 'react'
import { IoTrashBinSharp } from "react-icons/io5";

function Todo({todo,removeTodo,markcomplete}) {

   const changehandler = (e) =>{
        markcomplete(todo.id);
    }

  return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* <input type="checkbox" onChange={(()=>{
                changehandler(); if u wanna call the change handler fucntion then u need to make a wrapper fucntion and then call it 
            })} />  */}
              <input type="checkbox" onChange={changehandler}  defaultChecked={todo.completed}/>
            
            <p style={{textDecoration: todo.completed ? "line-through":""}}>{todo.text}</p>
            <IoTrashBinSharp onClick={(e)=>removeTodo(todo.id)}/>
        </div>
  )
} 

export default Todo