// features index
import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import routerReducer from "@features/create-route/model/create-route-slice";

const rootReducer = combineReducers({
    routes: routerReducer
})

export const store = configureStore({
    reducer: rootReducer
})
