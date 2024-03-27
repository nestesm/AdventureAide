// features index
import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    // authorization: userAuth
})

export const store = configureStore({
    reducer: rootReducer
})
