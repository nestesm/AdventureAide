import {createSlice} from "@reduxjs/toolkit";
import {mainRoute} from "@shared/config/types/interfaces";

const initialRoute: mainRoute = {
    days: [],
    settings: null
}

export const createRouteSlice = createSlice({
    name: 'CreateRouteSlice',
    initialState: initialRoute,
    reducers: {
        setRoute: (state, action) => {
            state = action.payload
        },
        clearRoute: (state) => {
            state = null
        }
    }
})

export const {setRoute, clearRoute} = createRouteSlice.actions;
export default createRouteSlice.reducer
