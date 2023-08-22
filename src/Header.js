import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <div className='container-fluid header'>
            <div className='row'>
                
                   <ul className='link'>
                 <li> <NavLink to='/login'   style={{ textDecoration: 'none', color:'white', fontSize:20 }}>login</NavLink></li>
                 <li><NavLink to='/'   style={{ textDecoration: 'none', color:'white', fontSize:20 }}>register</NavLink></li>
                    </ul> 

                </div>

            </div>

        </div>

    
  )
}

export default Header;


