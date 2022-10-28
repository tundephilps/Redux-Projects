import React from 'react'
import { useSelector } from "react-redux"
import { selectUser } from "../LoginSystem/Features/userSlice";
import Login from './Login';
import Logout from './Logout';

function LoginApp() {

    //const user = useSelector(selectUser);

  return   ( <> <Login /> </>
  
  );
  
}

export default LoginApp;