import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {AUTH_URLS} from "@features/user/api/api";

export const authLogin = createAsyncThunk(
    'authLogin',
    async (data: {username: any, password: any}) => {

            const response = await axios.post(AUTH_URLS.login,
                {
                        ...data
                     },
              {
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                     }
            )

            console.log('tokens!: ', response.data)
            return response.data
    }
)
