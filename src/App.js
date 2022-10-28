import React from 'react'
import { Provider, useSelector } from "react-redux";
import {store} from "./components/App/store"
import { selectUser } from './components/Features/userSlice';
import Login from './components/Login';
import Logout from './components/Logout';





function App () {

    const user = useSelector(selectUser);

    return (<div>
            {user ? <Logout /> : <Login />}
            </div>
    );
}


export default App;