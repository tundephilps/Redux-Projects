import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Counter App/counterSlice";


export const store = configureStore({
    reducer: {
            counter: counterReducer,
    }
})



