import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {AUTH_URLS} from "@features/user/api/api";
import {UserRegisterSlice} from "@features/user/model/user-register-slice";

export const userRegisterThunks = createAsyncThunk(
    'register',
    async (data: UserRegisterSlice) => {

        const response = await axios.post(AUTH_URLS.registration,
            {
                ...data
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        return response.data
    }
)
