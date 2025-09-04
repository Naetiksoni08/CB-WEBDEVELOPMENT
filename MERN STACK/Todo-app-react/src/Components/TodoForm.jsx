import React from 'react'
import {v4 as uuid} from "uuid";

function TodoForm({addTodo}) { // todos in props without use state
 
    let inpText = "";
    const submithandler = (e)=>{

      e.preventDefault();
     

      addTodo(inpText);

    //  todos.push({
    //     id:uuid(),
    //     text:inpText,
    //     completed:false
    //  })  without state 

        // console.log(todos)
    }

    const changehandler =(e)=>{
    inpText = e.target.value;
    
// console.log(inpText)
    }







  return (
   <form onSubmit={submithandler}>
    <input type="text" onChange={changehandler}/>
    <button>Add</button>
   </form>
  )
}

export default TodoForm