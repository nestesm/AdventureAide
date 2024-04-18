import {createSlice} from "@reduxjs/toolkit";
import {authLogin} from "@features/user/api/user-auth-thunks";

interface userAuthState {
    userMail: string,
    userName: string,
    userPassword: string,
    userAccessToken: string,
    loading: boolean,
    isError: boolean,
    errorMessage: string
}

export const user: userAuthState = {
    userMail: null,
    userName: null,
    userPassword: null,
    userAccessToken: null,
    loading: false,
    isError: false,
    errorMessage: null
}

const userAuthSlice = createSlice({
    name: 'userLogin',
    initialState: user,
    reducers: {
        setPassword: (state, action) => {
            state.userPassword = action.payload;
            state.isError = false
        },
        setUserName: (state, action) => {
          state.userName = action.payload
        },
        setUserMail: (state, action) => {
            state.userMail = action.payload;
            state.isError = false
        },
        setUserToken: (state, action) => {
            state.userAccessToken = action.payload
        },
        setIsError: (state) => {
          state.isError = true
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(authLogin.pending, (state) => {
                state.loading = true;
                state.isError = false;
                alert('pending')
            })
            .addCase(authLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.userAccessToken = action.payload.access_token;
                alert('success'+ action.payload.access_token)
            })
            .addCase(authLogin.rejected, (state, action) => {
                state.loading = false;
                state.isError = true;
                alert('rejected'+ JSON.stringify(action.payload))
            })
    }
})

export const {setPassword,
    setUserMail,
    setUserToken,
    setIsError,
} = userAuthSlice.actions;

export const {

} = userAuthSlice.caseReducers
export default userAuthSlice.reducer;
