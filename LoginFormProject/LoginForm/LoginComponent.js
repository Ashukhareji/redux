import React from 'react';
import { useSelector } from "react-redux";
import { selectUser } from "./LoginFormProject/LoginForm/userSlice";
import Login from './LoginFormProject/LoginForm/login';
import Logout from './LoginFormProject/LoginForm/logout';
import './LoginFormProject/LoginForm/Login.css';
import './LoginFormProject/LoginForm/logout.css';


const LoginComponent = () =>{
    const user = useSelector (selectUser);
    return (
      <div>
      {user ? <Logout/> : <Login/>}
      </div>
    );
  };

  export default LoginComponent;
