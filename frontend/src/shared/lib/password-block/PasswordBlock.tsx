import React, {useState} from "react";
import "../input.css";
import openPass from '@shared/assets/icons/openEyePass.png';
import closedPass from '@shared/assets/icons/closedEyePass.png';

export const PasswordBlock = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div className={'password-block'}>

            <input className={'input-default input-password'}
                   placeholder={'password'}
                   type={visible ? "text" : "password"}
            />

            <img className={'ml-[-30px] mt-1 h-6 w-6'}
                 onClick={() => setVisible(!visible)}
                 src={visible ? closedPass : openPass}
                 alt="show"
            />

        </div>
    )
}
