import {Provider} from "react-redux";
import {store} from "@features";
import React from "react";
import {AppRoutes} from "@app/routes";

export const ReduxProvider = () => {

    return (
        <Provider store={store}>
            <AppRoutes />
        </Provider>
    )
}
