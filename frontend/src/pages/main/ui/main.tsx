import React from "react";

function Main (){
    return (<>
        <div className={"flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-black"}>
            <div className={"text-white flex flex-col items-center "}>
                        <h5 className={"text-3xl font-mono"}>This is webpack5 setup created for development on:</h5>

                        <ul className={'mt-10 font-mono'}>
                            <li>Typescript</li>
                            <li>CSS, SCSS</li>
                            {/*<li>scss modules </li>*/}
                            <li>Tailwind</li>
                            <li>Redux</li>
                            <li>Feature Sliced Design</li>
                        </ul>
            </div>

        </div>

    </>)
}

export default Main
