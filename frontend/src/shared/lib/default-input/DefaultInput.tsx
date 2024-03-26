import React from "react";

interface Props {
    theme: 'Email' | string
}
export const DefaultInput: React.FC<Props> = ({theme}) => {


    const info  = theme === "Email" ? "email" : 'text'



    return (
        <input className={'input-default'} placeholder={theme} type={info} />
    )
}
