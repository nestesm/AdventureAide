// import style from "@/components/main/mainStyle.module.scss"
import '../../input.css'
import React, {lazy} from 'react';
import {Route, Routes} from "react-router";
import {GlobalPreloader} from "@components/system/preloader.jsx";
import NotFound from "@components/system/NotFound.jsx";

function Main (){
    const SplashComponent= lazy(() => import('@components/splashPage/SplashPage.jsx'))

    return (<>
        <Routes>
            <Route path="/">
                <Route index element={
                    <React.Suspense fallback={<GlobalPreloader />}>
                        <SplashComponent />
                    </React.Suspense>
                } />
                <Route
                    path="about"
                    element={
                        <React.Suspense fallback={<GlobalPreloader />}>
                            <SplashComponent />
                        </React.Suspense>
                    }
                />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </>)
}

export default Main
