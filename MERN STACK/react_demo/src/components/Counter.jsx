import React from 'react'
import { useState } from 'react';

function Counter() {
    // let count = 1;
    // const [count,SetCount] = useState(100); // defualt or initial value
    const [count,SetCount] = useState(1);

    function incrementor() {
        // count+=1;
        // console.log(count);
        SetCount(count+1);
    }
    
  return (
    <>
    <span>{count}</span>
<br/>
    <button onClick={incrementor}>+1</button>
    </>
  )
}

export default Counter