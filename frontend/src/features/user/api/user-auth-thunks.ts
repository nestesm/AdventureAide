import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {AUTH_URLS} from "@features/user/api/api";

export const authLogin = createAsyncThunk(
    'authLogin',
    async (data: {login: string, password: string}) => {

        try {
            const response = await axios.get(AUTH_URLS.login,{
                data: {
                    ...data
                }
            })

            return response.data
        }
        catch (error){
            return error;
        }
    }
)
