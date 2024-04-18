import {createSlice} from "@reduxjs/toolkit";
import {userRegisterThunks} from "@features/user/api/user-register-thunks";

interface registerSystem {
    success: boolean,
    isLoading: boolean,
    isError: boolean,
    errorMessage: string
}

export interface UserRegisterSlice {
    email: string,
    fullname: string,
    password: string,
    gender: string,
}

interface registerState {
    user: UserRegisterSlice,
    system: registerSystem,
}

const userRegisterInitial : registerState = {
    user: {
        email: null,
        fullname: null,
        gender: null,
        password: null,
    },
    system: {
        success: false,
        isLoading: false,
        isError: false,
        errorMessage: null
    }
}

export const UserRegisterSlice = createSlice({
    name: 'register',
    initialState: userRegisterInitial,
    reducers: {
        setRegisterMail: (state, action) => {
            state.user.email = action.payload
            state.system.isError = false
        },
        setRegisterName: (state, action) => {
            state.user.fullname = action.payload
            state.system.isError = false
        },
        setRegisterGender: (state, action) => {
            state.user.gender = action.payload
            state.system.isError = false
        },
        setRegisterPass: (state, action) => {
            state.user.password = action.payload
            state.system.isError = false
        },
        setRegisterError: (state) => {
            state.system.isError = true
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userRegisterThunks.pending, (state) => {
                state.system.isLoading = true
            })
            .addCase(userRegisterThunks.fulfilled, (state) => {
                state.system.isLoading = false
                state.system.success = true
                state.system.isError = false
            })
            .addCase(userRegisterThunks.rejected, (state)=> {
                state.system.isLoading = false
                state.system.success = false
                state.system.isError = true
            })

        }
})

export const {
    setRegisterMail,
    setRegisterGender,
    setRegisterPass,
    setRegisterName,
    setRegisterError,
} = UserRegisterSlice.actions

export default UserRegisterSlice.reducer
