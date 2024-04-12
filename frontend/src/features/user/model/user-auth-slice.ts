import {createSlice} from "@reduxjs/toolkit";
import {authLogin} from "@features/user/api/user-auth-thunks";
import {AxiosError} from "axios";

interface userAuthState {
    userName: string,
    userPassword: string,
    userAccessToken: string,
    loading: boolean,
    isError: boolean,
    errorMessage: string
}

export const user: userAuthState = {
    userName: null,
    userPassword: null,
    userAccessToken: null,
    loading: false,
    isError: false,
    errorMessage: null
}

const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState: user,
    reducers: {
        setPassword: (state, action) => {
            state.userPassword = action.payload;
        },
        setUserName: (state, action) => {
            state.userName = action.payload;
        },
        setUserToken: (state, action) => {
            state.userAccessToken = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(authLogin.pending, (state) => {
                state.loading = true;
                state.isError = false;
            })
            .addCase(authLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.userName = action.payload.name;
                state.userAccessToken = action.payload.token;
            })
            .addCase(authLogin.rejected, (state, action) => {
                state.loading = false;
                state.isError = true;
                state.errorMessage = (action.payload as AxiosError).message ?? 'unknown error';
            })
    }
})

export const {setPassword, setUserName, setUserToken} = userAuthSlice.actions;

export default userAuthSlice.reducer;
