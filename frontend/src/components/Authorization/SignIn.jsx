import SplashBg from "@assets/background/SplashPage";
import React from "react";
import closedPass from "@assets/icons/closedEyePass";
import openPass from "@assets/icons/openEyePass";

export default class SignIn extends React.Component {

    constructor() {
        super();
        this.state = {
            passVisible: false
        }
    }

    passwordVisibility(){
        this.setState({passVisible: !this.state.passVisible})
    }

    render() {
        return (
            <>
                {/*background*/}
                <div className={"bg-cover absolute top-0 left-0 w-[100vw] h-[100vh] z-1"} style={{backgroundImage: `url(${SplashBg})`}}>

                </div>
                <div className={"flex flex-col justify-center items-center overflow-hidden z-1"}>
                    <div className={`title-block`}>
                        TravelEasy!
                    </div>

                    <div className={`auth-block`}>
                        <header className={'text-2xl text-white font-bold mb-7'}>SIGN IN</header>
                        <input className={'input-default'} placeholder={'email'} type="text" />
                        <div className={'password-block'}>

                            <input className={'input-default input-password'} placeholder={'password'} type={this.state.passVisible ? "text" : "password"} />

                            <img className={'ml-[-30px] mt-1 h-6 w-6'} onClick={() => this.passwordVisibility()} src={this.state.passVisible ? closedPass : openPass}  alt="t"/>

                        </div>
                        <button className={'submit-button'}>SIGN IN</button>
                        <a href="" className={'text-blue-600 hover:text-purple-700 mt-2'}>
                            forgot password?
                        </a>
                    </div>

                </div>
            </>
        )
    }
}
