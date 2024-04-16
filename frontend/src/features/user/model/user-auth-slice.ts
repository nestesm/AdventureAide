import {createSlice} from "@reduxjs/toolkit";
import {authLogin} from "@features/user/api/user-auth-thunks";

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
            state.isError = false
        },
        setUserName: (state, action) => {
            state.userName = action.payload;
            state.isError = false
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
                alert('pending')
            })
            .addCase(authLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.userName = action.payload.name;
                state.userAccessToken = action.payload.token;
                alert('success'+ action.payload)

            })
            .addCase(authLogin.rejected, (state, action) => {
                state.loading = false;
                state.isError = true;
                //state.errorMessage = (action.payload as AxiosError).message ?? 'unknown error';
                alert('error'+ action.payload)
            })
    }
})

export const {setPassword,
    setUserName,
    setUserToken,
} = userAuthSlice.actions;

export const {

} = userAuthSlice.caseReducers
export default userAuthSlice.reducer;
