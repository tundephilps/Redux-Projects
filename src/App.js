import React from 'react'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Diary from './components/Diary';
import { persistor, store } from './components/Redux/store';



function App () {
    return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Diary />
          </PersistGate>
        </Provider>
    );
}


export default App;