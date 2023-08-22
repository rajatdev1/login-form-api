import React from 'react';
import ReactDOM from 'react-dom';
import { useState,useEffect } from 'react';
import { Button } from 'react-bootstrap';



const Login = () => {

   const[email,setMail]=useState("");
   const[password,setPassword]= useState("");

   const handleSubmit=(e)=>{
    e.preventDefault()

    let data={password,email}
    // console.log(items);
    fetch('http://localhost:3030/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((resp) => resp.json())
        .then((data) => console.log(data));
  }

    
   

  return (
    <div>
        <h1 className='text-center pt-5'>Login Form</h1>
        <br/>
        <div className='col-sm-6 offset-sm-3'>
        <input type='text' onChange={(e)=>setMail(e.target.value)} placeholder='please enter your mail' className='form-control'></input>
        <br/>

        <input type='password'  onChange={(e)=>setPassword(e.target.value)} placeholder='please enter your password' className='form-control'></input>

        <br/>
        <Button onClick={handleSubmit}>Login</Button>
        </div>
    </div>
  )
  }

export default Login;