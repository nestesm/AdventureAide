// features index
import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import routerReducer from "@features/create-route/model/create-route-slice";
import userAuthReducer from "@features/user/model/user-auth-slice";
import {useDispatch} from "react-redux";

const rootReducer = combineReducers({
    routes: routerReducer,
    user: userAuthReducer,
})
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const store = configureStore({
    reducer: rootReducer
})
