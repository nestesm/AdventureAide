import React from "react";

interface Props {
    theme: string
}
export const DefaultInput: React.FC<Props> = ({theme}) => {
    return (
        <input className={'input-default'} placeholder={theme} type="text" />
    )
}
