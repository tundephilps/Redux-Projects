import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";


const middleware = [];

if (process.env.NODE_ENV === "development") {
    middleware.push(logger);
}

const storetodo = createStore(rootReducer, applyMiddleware(...middleware))

export default storetodo;


