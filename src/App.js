import React from 'react'
import { Provider } from 'react-redux';
import TodoApp from './components/TodoApp';
import { store } from "./components/Redux/store"
import "./App.css"


function App () {
    return (
        
            <div>
             <Provider store={store}>

            <TodoApp />
            </Provider>
            </div>
    );
}


export default App;