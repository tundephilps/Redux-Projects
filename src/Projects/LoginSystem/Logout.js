import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./Login.css"
import { logout, selectUser } from "../LoginSystem/Features/userSlice"

function Logout() {

    const user = useSelector(selectUser);

    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();

        dispatch(logout());
    }
  return (
    <div className='logout'>
        <h1> Welcome <span className='user_name'>{user.name}</span>
        
        </h1>{ " " }
        <button className='logout_button' onClick={(e) => handleLogout(e)}></button>
    </div>
  )
}

export default Logout