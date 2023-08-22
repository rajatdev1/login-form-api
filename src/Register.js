import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'

const Register = () => {

  const[name,setName]= useState("");
  const[password,setPassword]= useState("");
  const[email,setMail]= useState("");


 async function Signup(e){
    e.preventDefault()

    let data={name,password,email}
    // console.log(items);
    fetch('http://localhost:3030/Register', {
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
        <h1 className='register text-center pt-5'>Register Page</h1>
        

        <div className='col-lg-6 offset-3'>

        <input type='text' onChange={(e)=>setName(e.target.value)} placeholder='Enter name' className='form-control  mt-4'></input>

        <input type='Password'  onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' className='form-control  mt-4'></input>

        <input type='text'  onChange={(e)=>setMail(e.target.value)} placeholder='Enter email' className='form-control  mt-4'></input>
        <Button onClick={Signup} className='mt-4'>Sign up</Button>
        </div>
    </div>
  )
}

export default Register