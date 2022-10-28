import {LOAD_DATA} from './todo.actionType'

export const loadData = (data) => {
    return{
        type:LOAD_DATA,
        payload:data
    }
}