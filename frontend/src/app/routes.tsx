import React from "react";
import {Route, Routes} from "react-router";
import {NotFound} from "@pages/not-found/not-found-page";
import {GlobalPreloader} from "@pages/global-preloader/global-preloader";
import {SplashPage} from "@pages/splash-page/ui/splash-page";
import {SignIn} from "@pages/signin/signin";
import {BrowserRouter} from "react-router-dom";

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
                                <SignIn />
                            </React.Suspense>
                        }
                    />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
