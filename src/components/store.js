import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";



export const storecounter = configureStore({
    reducer: {
            counter: counterReducer,
    },    
})