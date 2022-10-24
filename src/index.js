import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {storecounter, storelogin, storetodo} from "../src/Projects/App/store"
import { Provider } from "react-redux";
//import storetodo  from './Projects/Todo App/Redux/store';


ReactDOM.render(
  
  <Provider store={storelogin}>
    
  <Provider store={storecounter}>
             <App />
       </Provider>
  </Provider>,
  document.getElementById('root')
);


