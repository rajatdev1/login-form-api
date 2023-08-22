import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Button} from 'react-bootstrap';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login';
import Header from './Header';
import Register from './Register';
import Sum from './Sum';

function App() {
  return (
    <div className="App">

      
<Header />

     
     
      <Routes>
        <Route path='/' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    
     
     
      
      
     
    </div>
  );
}

export default App;
