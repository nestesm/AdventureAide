import React from "react";
import {useNavigate} from "react-router";
export const NotFound = () => {
    const navigate = useNavigate()

    return(<>
        <div className={'absolute flex flex-col justify-center items-center w-[100vw] h-[100vh] font-mono'}>
            <div className={'flex flex-col items-center'}>
                <div className={'text-5xl mb-4'}>👽</div>
                <span className={"text-3xl"}>Page not found</span>
                <span>please return
                    <button className={'rounded-lg bg-cyan-400 p-1 m-2'}
                            onClick={() => navigate('/')}>
                        back
                    </button>
                </span>
            </div>
        </div>
    </>)
}
