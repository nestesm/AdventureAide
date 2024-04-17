import React from "react";
import {setUserMail} from "@features/user/model/user-auth-slice";
import {useAppDispatch} from "@features";

interface Props {
    theme: 'Email' | 'Full name' | string
}
export const DefaultInput: React.FC<Props> = ({theme}) => {
    const dispatch = useAppDispatch()

    let inputType = '';

    switch (theme){
        case "Email":
            inputType = 'email'
            break;
        case "Full name":
            inputType = theme
            break;
        case "From" || "To":
            inputType = "text"
            break;
        case 'date':
            inputType = theme
            break;
        default:
            inputType = 'text'
    }


    return (
        <input className={'input-default'}
               required
               placeholder={theme}
               type={inputType}
               onChange={(e) => {
                   if (inputType == 'email') {
                       dispatch(setUserMail(e.target.value))
                   } else if(inputType == 'Full name'){
                       // dispatch(setUserName())
                   }
               }}
        />
    )
}
