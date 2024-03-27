import React, {lazy} from "react";
import {Route, Routes} from "react-router";
import {NotFound} from "@pages/not-found/not-found-page";
import {GlobalPreloader} from "@pages/global-preloader/global-preloader";
import {BrowserRouter} from "react-router-dom";

const SignUp = lazy(() => import('@pages/signup/signup'))
const SignIn = lazy(() => import('@pages/signin/signin'))
const SplashPage = lazy(() => import('@pages/splash-page/ui/splash-page'))
const PasswordRecovery = lazy(() => import('@pages/password-recovery/password-recovery'))

export const AppRoutes = () => {



    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={
                        <React.Suspense fallback={<GlobalPreloader />}>
                            <SplashPage />
                        </React.Suspense>
                    } />
                    <Route
                        path="about"
                        element={
                            <React.Suspense fallback={<GlobalPreloader />}>
                                <SplashPage />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path={'recovery'}
                        element={
                            <React.Suspense fallback={<GlobalPreloader />}>
                                <PasswordRecovery />
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
        </BrowserRouter>
    )
}
