// features index
import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import routerReducer from "@features/create-route/model/create-route-slice";
import userAuthReducer from "@features/user/model/user-auth-slice";

const rootReducer = combineReducers({
    routes: routerReducer,
    user: userAuthReducer,
})

export const store = configureStore({
    reducer: rootReducer
})
