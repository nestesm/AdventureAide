// import style from "@/components/main/mainStyle.module.scss"
import '../../input.css'
import React, {lazy} from 'react';
import {Route, Routes} from "react-router";
import {GlobalPreloader} from "@components/system/preloader.jsx";
import NotFound from "@components/system/NotFound.jsx";
import {SignIn} from "@components/Authorization/SignIn.jsx";

function Main (){
    const SplashComponent= lazy(() => import('@components/splashPage/SplashPage.jsx'))
    const SignIn = lazy(() => import('@components/Authorization/SignIn.jsx'))
    const SignUp = lazy(() => import('@components/Authorization/SignUp.jsx'))

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
                <Route
                    path={"signin"}
                    element={
                        <React.Suspense fallback={<GlobalPreloader />}>
                            <SignIn />
                        </React.Suspense>
                    }
                />
                <Route
                    path={"signup"}
                    element={
                        <React.Suspense fallback={<GlobalPreloader />}>
                            <SignUp />
                        </React.Suspense>
                    }
                />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </>)
}

export default Main
