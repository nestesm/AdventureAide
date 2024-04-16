import React from "react";
import '../input.css'
import {useSelector} from "react-redux";

interface s_button {
    text?: string
}

export const SubmitButton: React.FC<s_button> = ({text}) => {

    const error = useSelector((state: any) => state.user.isError)


    return (
        <button className={'submit-button'}
                type={"submit"}
                disabled={error}
        >
            {text ? text : 'OK'}
        </button>
    )
}
