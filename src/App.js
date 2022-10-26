import React from 'react'
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"


function App () {
    return (
        
            <div>
                    <Router>        
                    <Routes>
                         <Route path="/" element={<Homepage /> } />
                    </Routes>
                    </Router>
            </div>
    );
}


export default App;