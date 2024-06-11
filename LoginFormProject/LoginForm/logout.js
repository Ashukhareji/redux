import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './userSlice';
import '../LoginForm/logout.css';
import { logout } from '../LoginForm/userSlice';

const Logout = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className='logout_form'>
            <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
            <h1>Welcome😊 {user && <span className='user_name'>{user.name}</span>}</h1>
            <button className='logout_btn' onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
