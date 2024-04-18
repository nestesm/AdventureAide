import React from "react";
import {DefaultInput} from "@shared/lib/default-input/DefaultInput";
import './AuthPanel.css'
import {PasswordBlock} from "@shared/lib/password-block/PasswordBlock";
import {SubmitButton} from "@shared/lib/submit-button/submitButton";
import {AuthBlock} from "@shared/lib/auth-block/auth-block";
import {AuthTypes} from "@widgets/auth-panel/lib/interfaces/interfaces";
import {useSelector} from "react-redux";
import {AuthErrorMessage} from "@shared/lib/auth-error-message/auth-error-message";
import {useAppDispatch} from "@features";
import {setRegisterGender} from "@features/user/model/user-register-slice";

export const AuthPanel: React.FC<AuthTypes> = ({typeOfBlock}) => {

    const isAuthError = useSelector((state: any) => state.userLogin.isError)
    const isRegisterError = useSelector((state: any) => state.userRegister.system.isError)

    const dispatch = useAppDispatch()

    switch (typeOfBlock){
        case "SIGN IN":
            return (
                <AuthBlock formType={typeOfBlock}>
                    <header className={'text-2xl text-white font-bold mb-7'}>{typeOfBlock}</header>

                    <DefaultInput theme={'Email'}/>
                    <PasswordBlock />

                    {isAuthError && <AuthErrorMessage/>}

                    <SubmitButton text={typeOfBlock} />


                    <a href="/recovery" className={'text-blue-600 hover:text-purple-700 mt-2'}>
                        Forgot password?
                    </a>

                    <a href="/signup" className={'text-blue-600 hover:text-purple-700 mt-2'}>
                        Don't have an account yet?
                    </a>
                </AuthBlock>
            )
        case "SIGN UP":
            return (
                <AuthBlock formType={typeOfBlock}>
                    <header className={'text-2xl text-white font-bold mb-7'}>{typeOfBlock}</header>

                    <DefaultInput theme={'Email'}/>
                    <DefaultInput theme={'Full name'} />
                    <PasswordBlock />
                    {isRegisterError && <AuthErrorMessage/>}

                    <select id="countries_disabled"
                            className="input-default"
                            onChange={(event) => dispatch(setRegisterGender(event.target.value))}
                    >
                        <option selected>Choose a gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>

                    <SubmitButton text={typeOfBlock}/>


                    <a href="/signin" className={'text-blue-600 hover:text-purple-700 mt-2'}>
                        Already have an account?
                    </a>
                </AuthBlock>
            );
        case "TRY YOURSELF":
            return (
                <AuthBlock>
                    <header className={'text-2xl text-white font-bold mb-7'}>{typeOfBlock}</header>

                    <DefaultInput theme={'From'}/>
                    <DefaultInput theme={'To'} />

                    <SubmitButton text={typeOfBlock}/>
                </AuthBlock>
            );
        case "RECOVER":
            return (
                <AuthBlock>
                    <header className={'text-2xl text-white font-bold mb-7'}>{typeOfBlock}</header>

                    <DefaultInput theme={'Email'}/>

                    <SubmitButton text={typeOfBlock}/>
                </AuthBlock>
            );
        default :
            return (
                <AuthBlock>
                    <header className={'text-2xl text-white font-bold mb-7'}>{typeOfBlock}</header>

                    <DefaultInput theme={'From'}/>
                    <DefaultInput theme={'To'} />

                    <SubmitButton text={typeOfBlock}/>
                </AuthBlock>
            );
    }
}
