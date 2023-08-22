import React, { useState } from 'react'

const Sum = () => {

const [num1,setNum1]=useState(0);
const[num2,setNum2]=useState(0);
const [sum,setSum]=useState(0);


function findSum(){

    setSum(num1+num2);
}    



  return (
    <div>
       <input value={num1} onChange={((e)=>setNum1(+e.target.value))}/>
       <input  value={num2} onChange={((e)=>setNum2(+e.target.value))}/>
       <button onClick={findSum}>Add</button>
       <h1>{sum}</h1>
    </div>
  )
}

export default Sum