import React from 'react'
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import { storecounter } from './components/store';



function App () {
    return (
        
            <div>
                <Provider store={storecounter}>
                    <Counter />
                </Provider>
            </div>
    );
}


export default App;