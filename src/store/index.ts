import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducers from "./reducers";

const middlewares = [thunk];

export default createStore(Reducers, applyMiddleware(...middlewares));

export type RootState = ReturnType<typeof Reducers>