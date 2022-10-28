import {LOAD_DATA} from './todo.actionType'

export const TODO_KEY = 'todoStore'

let initialState = []

export const todoReducer = (state = initialState, action) => {
    let {type, payload} = action

    switch (type) {
        case LOAD_DATA:
            let newTodo = [...state]
            newTodo.push(action.payload)
            return newTodo

            default: return state
    }
}