import React from "react";
import {setUserName} from "@features/user/model/user-auth-slice";
import {useAppDispatch} from "@features";

interface Props {
    theme: 'Email' | string
}
export const DefaultInput: React.FC<Props> = ({theme}) => {
    const dispatch = useAppDispatch()

    const info  = theme === "Email" ? "email" : 'text'


    return (
        <input className={'input-default'}
               required
               placeholder={theme}
               type={info}
               onChange={(e) => {
                   if (info == 'email') {
                       dispatch(setUserName(e.target.value))
                   }
               }}
        />
    )
}
