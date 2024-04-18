import React, {useState} from "react";
import "../input.css";
import openPass from '@shared/assets/icons/openEyePass.png';
import closedPass from '@shared/assets/icons/closedEyePass.png';
import {useDispatch} from "react-redux";
import {setPassword} from "@features/user/model/user-auth-slice";
import {setRegisterPass} from "@features/user/model/user-register-slice";

export const PasswordBlock = () => {
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch()

    return (
        <div className={'password-block'}>

            <input required
                   className={'input-default input-password'}
                   placeholder={'password'}
                   type={visible ? "text" : "password"}
                   onChange={(e) => {
                       dispatch(setPassword(e.target.value))
                       dispatch(setRegisterPass(e.target.value))
                   }
            }
            />

            <img className={'ml-[-30px] mt-1 h-6 w-6'}
                 onClick={() => setVisible(!visible)}
                 src={visible ? closedPass : openPass}
                 alt="show"
            />

        </div>
    )
}
