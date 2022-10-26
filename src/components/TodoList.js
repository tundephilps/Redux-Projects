import React from 'react'
import TodoInput from './TodoInput'
import "./Todo.css";
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { useSelector, useDispatch } from "react-redux"
import { completeTodo, addTodo, removeTodo, updateTodo } from "./Redux/action"
import Todo from './Todo';

function TodoList() {
    const state = useSelector((state) => ({ ...state.todos }));
    let dispatch = useDispatch();

    const create = (newTodo) => {
        dispatch(addTodo(newTodo))
    };

    const update = (id, updatedTask) => {
        dispatch(updateTodo({ id, updatedTask }));
    };

  return (
    <div className='TodoList'>
            <h2>Todo App with React Redux</h2>
            <TodoInput createTodo ={create} />
            <ul>
                <TransitionGroup className="todo-list">
                    {state.todos && state.todos.map((todo) => {
                        return (
                            <CSSTransition key={todo.id} classNames="todo">
                                    <Todo
                                    key={todo.id}
                                    id={todo.id}
                                    task={todo.task}
                                    completed={todo.completed}
                                    toggleTodo={() => dispatch(completeTodo(todo))}
                                    removeTodo={() => dispatch(removeTodo(todo))}
                                    updateTodo={update}
                                    />
                            </CSSTransition>
                        );
                    })}
                </TransitionGroup>
            </ul>
    </div>
  )
}

export default TodoList