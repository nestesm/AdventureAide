import React from "react";
import '../input.css'

interface s_button {
    text?: string
}

export const SubmitButton: React.FC<s_button> = ({text}) => {
    return (
        <button className={'submit-button'} type={"submit"}>{text ? text : 'OK'}</button>
    )
}
