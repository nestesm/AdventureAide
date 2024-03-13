import React from "react";
import SplashBg from '@assets/background/SplashPage.png'
// import LocationIcon from '@assets/icons/location.svg'
export default class SplashPage extends React.Component{
    render(){
        return (<>
            {/*background*/}
            <div className={"bg-cover absolute top-0 left-0 w-[100vw] h-[100vh] z-1"} style={{backgroundImage: `url(${SplashBg})`}}>
            </div>
            {/*content*/}
            <div className={"flex flex-col justify-center items-center overflow-hidden z-1"}>
                <div className={`title-block`}>
                    TravelEasy!
                </div>

                <div className={`auth-block`}>
                    <div className={'flex flex-row'}>
                        <input className={'input-default'} placeholder={'From'} type="text" />
                        {/*<img className={'hover:scale-105 transition duration-100'} src={LocationIcon} width={25} height={25} title={'location'} alt={'location'}/>*/}
                    </div>
                    <div className={'flex flex-row'}>
                        <input className={'input-default'} placeholder={'To'} type="text" />
                        {/*<img className={'hover:scale-105 transition duration-100'} src={LocationIcon} height={25} width={25} title={'location'} alt={'location'}/>*/}
                    </div>

                    <button className={'submit-button'}>GO</button>
                </div>
            </div>

        </>)
    }
}
