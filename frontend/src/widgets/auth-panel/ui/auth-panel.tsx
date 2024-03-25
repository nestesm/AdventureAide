import React from "react";
import {DefaultInput} from "@shared/lib/default-input/DefaultInput";
import './AuthPanel.css'
import {PasswordBlock} from "@shared/lib/password-block/PasswordBlock";
import {SubmitButton} from "@shared/lib/submit-button/submitButton";
import {AuthBlock} from "@shared/lib/auth-block/auth-block";
import {AuthTypes} from "@widgets/auth-panel/lib/interfaces/interfaces";

export const AuthPanel: React.FC<AuthTypes> = ({typeOfBlock}) => {

    switch (typeOfBlock){
        case "SIGN IN":
            return (
                <AuthBlock>
                    <header className={'text-2xl text-white font-bold mb-7'}>{typeOfBlock}</header>

                    <DefaultInput theme={'email'}/>
                    <PasswordBlock />
                    <SubmitButton />

                    <a href="" className={'text-blue-600 hover:text-purple-700 mt-2'}>
                        Forgot password?
                    </a>

                    <a href="/signup" className={'text-blue-600 hover:text-purple-700 mt-2'}>
                        Don't have an account yet?
                    </a>
                </AuthBlock>
            )
        case "SIGN UP":
            return (
                <AuthBlock>
                    <header className={'text-2xl text-white font-bold mb-7'}>{typeOfBlock}</header>

                    <DefaultInput theme={'email'}/>
                    <DefaultInput theme={'text'} />
                    <PasswordBlock />
                    <SubmitButton />

                    <a href="/signin" className={'text-blue-600 hover:text-purple-700 mt-2'}>
                        Already have an account?
                    </a>
                </AuthBlock>
            );
        case "TRY YOURSELF":
            return (
                <AuthBlock>
                    <header className={'text-2xl text-white font-bold mb-7'}>{typeOfBlock}</header>

                    {/*<DefaultInput theme={'From'}/>*/}
                    {/*<DefaultInput theme={'To'} />*/}

                    <SubmitButton />

                    <a href="/signin" className={'text-blue-600 hover:text-purple-700 mt-2'}>
                        Already have an account?
                    </a>
                </AuthBlock>
            )
    }

    // return (
    //     <AuthBlock>
    //             <header className={'text-2xl text-white font-bold mb-7'}>{typeOfBlock}</header>
    //
    //             <DefaultInput theme={'email'}/>
    //             <PasswordBlock />
    //             <SubmitButton />
    //
    //             <a href="" className={'text-blue-600 hover:text-purple-700 mt-2'}>
    //                 forgot password?
    //             </a>
    //     </AuthBlock>
    // )
}
