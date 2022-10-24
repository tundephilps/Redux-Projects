import React from 'react'
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Counter from './Projects/Counter App/Counter';
import TodoApp from './Projects/Todo App/TodoApp';
//import Login from './Projects/LoginSystem/Login';
//import ReduxLogin from './Projects/LoginSystem/ReduxLogin';
//import Login from './Projects/LoginSystem/Login';
import LoginApp from './Projects/LoginSystem/LoginApp';


function App () {
    return (
        
            <div>
                    <Router>

                    <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/CounterApp" element={<Counter />} />
                
                <Route path="/TodoApp" element={<TodoApp />} />
                
                <Route path="/Login" element={<LoginApp />} />
                    </Routes>
                    </Router>
            </div>
    );
}


export default App;