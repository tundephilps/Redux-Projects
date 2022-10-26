import React from 'react'
import { Provider } from 'react-redux';
import { useSelector } from "react-redux";
import store from './Redux/store';
import "./Todo.css";
import TodoList from './TodoList';


function TodoApp() {

    const state = useSelector((state) => ({ ...state }));
    console.log("state", state);
  return (

    
    <div id='background'>
      <TodoList />
    </div>
  
  )
}

export default TodoApp