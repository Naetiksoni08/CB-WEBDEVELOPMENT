import React from 'react'
import Todo from './todo';

function Listtodo() {
const todos = [
    "Make the bed",
    "Drink a glass of water",
    "Check emails/messages",
    "Create or review daily schedule",
    "Complete work/study tasks",
    "Take a short walk or stretch",
    "Prepare and eat meals",
    "Tidy up workspace or living area",
    "Read for 15–30 minutes",
    "Plan tomorrow’s tasks",
  ];

  return (
     <>
     <ul>
  {/* <Todo todo = "testing"/> */}
   {todos.map((todos,index) => <Todo key={index} todo={todos} />)}
     
   {/* {todos.map((todos,index) =>{
   return <li>{todos}</li>
   })} */}

     
     </ul>
     </>
  );
}

export default Listtodo
