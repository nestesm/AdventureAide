import React from "react";

interface Props {
    theme: 'text' | 'email'
}
export const DefaultInput: React.FC<Props> = ({theme}) => {


    const info  = theme === "text" ? "full name" : 'email'

    return (
        <input className={'input-default'} placeholder={info} type={theme} />
    )
}
