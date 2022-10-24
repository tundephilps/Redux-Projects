import React from 'react'
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Counter from './Projects/Counter App/Counter';
import TodoApp from './Projects/Todo App/TodoApp';
import LoginApp from './Projects/LoginSystem/LoginApp';
import Diary from './Projects/Diary/Diary';

import { store, persistor } from './Projects/Diary/Redux/store'
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'


function App () {
    return (
        
            <div>
                    <Router>
                        
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Homepage />
    </PersistGate>
    </Provider>               
                    <Routes>
                <Route path="/CounterApp" element={<Counter />} />
                
                <Route path="/TodoApp" element={<TodoApp />} />
                
                <Route path="/Login" element={<LoginApp />} />
                
                <Route path="/Diary" element={<Diary />} />
                    </Routes>
                    </Router>
            </div>
    );
}


export default App;