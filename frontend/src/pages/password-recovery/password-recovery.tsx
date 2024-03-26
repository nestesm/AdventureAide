import {AuthPanel} from "@widgets/auth-panel/ui/auth-panel";
import SplashBg from "@shared/assets/background/SplashPage.png";
import React from "react";

export const PasswordRecovery = () => {
    return (<>
        {/*background*/}
        <div className={"bg-cover absolute top-0 left-0 w-[100vw] h-[100vh] z-1"} style={{backgroundImage: `url(${SplashBg})`}}>

        </div>
        <div className={"flex flex-col justify-center items-center overflow-hidden z-1"}>
            <div className={`title-block`}>
                TravelEasy!
            </div>
            <AuthPanel typeOfBlock={'RECOVER'}/>
        </div>
    </>)
}
