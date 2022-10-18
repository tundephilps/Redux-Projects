import React from 'react'
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Counter from './Projects/Counter App/Counter';


function App () {
    return (
        
            <div>
                    <Router>

                    <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/CounterApp" element={<Counter />} />
                    </Routes>
                    </Router>
            </div>
    );
}


export default App;