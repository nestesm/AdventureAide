import {createSlice} from "@reduxjs/toolkit";

export interface UserRegisterSlice {
    userEmail: string,
    userName: string,
    userPassword: string,
    userGender: string,
}

const userRegisterInitial : UserRegisterSlice = {
    userEmail: null,
    userName: null,
    userGender: null,
    userPassword: null,
}

export const UserRegisterSlice = createSlice({
    name: 'register',
    initialState: userRegisterInitial,
    reducers: {

    }
})
