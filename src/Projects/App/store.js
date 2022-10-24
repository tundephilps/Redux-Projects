import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Counter App/counterSlice";
import logger from "redux-logger";
//import { useReducer } from "react";
import userReducer from "../LoginSystem/Features/userSlice"
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../Todo App/Redux/root-reducer";

const middleware = [];


if (process.env.NODE_ENV === "development") {
    middleware.push(logger);
}

export const storecounter = configureStore({
    reducer: {
            counter: counterReducer,
    },    
})

//For todoapp
export const storetodo = createStore(rootReducer, applyMiddleware(...middleware))


export const storelogin = configureStore({
    reducer: {
        user: userReducer,
    },
});

