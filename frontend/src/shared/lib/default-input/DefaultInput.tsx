import React from "react";
import {useDispatch} from "react-redux";
import {setUserName} from "@features/user/model/user-auth-slice";

interface Props {
    theme: 'Email' | string
}
export const DefaultInput: React.FC<Props> = ({theme}) => {
    const dispatch = useDispatch()

    const info  = theme === "Email" ? "email" : 'text'


    return (
        <input className={'input-default'}
               required
               placeholder={theme}
               type={info}
               onChange={(e) => info == 'email' ?? dispatch(setUserName(e.target.value))}
        />
    )
}
