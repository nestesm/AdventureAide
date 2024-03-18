import React from "react";
import {DefaultInput} from "@shared/lib/default-input/DefaultInput";
import './AuthPanel.css'
import {PasswordBlock} from "@shared/lib/password-block/PasswordBlock";
import {SubmitButton} from "@shared/lib/submit-button/submitButton";

export const AuthPanel = () => {
    return (
        <div className={`auth-block`}>
            <header className={'text-2xl text-white font-bold mb-7'}>SIGN IN</header>
            <DefaultInput theme={'email'}/>
            <PasswordBlock />
            <SubmitButton />
            <a href="" className={'text-blue-600 hover:text-purple-700 mt-2'}>
                forgot password?
            </a>
        </div>
    )
}
