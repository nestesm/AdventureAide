import {RouteDay, testRoute} from "@shared/config/types/interfaces";
import {DayRoute} from "@widgets/splash-page/day-route/ui/day-route";
import React from "react";
import {useParams} from "react-router";
import '../../../shared/lib/input'
import {ReadyRouterHeader} from "@widgets/splash-page/header/ReadyRouterHeader";

export const ReadyRoutePage = () => {
    const { id } = useParams<{ id: string }>();
    const isAuthorized = testRoute.settings.isAuthorized;

    return (<>
        <ReadyRouterHeader pageId={id}/>
        <div className={'flex flex-row justify-between'}>

            <div className={"w-[15vw] h-100vh"}>
                {/*left indent*/}
            </div>

            <div>
                {testRoute.days.map((day: RouteDay, index) => (
                    <DayRoute dayValue={day} isAuthorized={isAuthorized} key={index} />
                ))}
            </div>
            <div className={"w-[15vw] h-100vh"}>
                {/*right indent*/}
            </div>
        </div>
    </>)
}
