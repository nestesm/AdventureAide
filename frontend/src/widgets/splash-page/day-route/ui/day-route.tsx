import '../input.css'
import React from "react";
import {RouteDay} from "@shared/config/types/interfaces";
import '../../../../shared/lib/input.css'

interface Props {
    dayValue: RouteDay,
    isAuthorized: boolean
}
export const DayRoute: React.FC<Props> = ({dayValue, isAuthorized}) => {

    return (<>
        <div className={'day-route-block'}>

            {isAuthorized && <div className={'day-route-bar'}>
                <button className={'day-route-edit-button'}>edit</button>
                <button className={'day-route-edit-button'}>save</button>
            </div>}

            <div className={'day-route-block-content'}>
                {Object.keys(dayValue).map((dayItemKey, index) => (
                    <p key={index} className={'day-route-element'}><span className={'text-1xl font-bold'}>
                        {dayItemKey}:</span> {dayItemKey !== 'placesLinks' && dayItemKey !== 'endLocation' && dayItemKey !== 'startLocation' && dayValue[dayItemKey]}
                    </p>
                ))}
                {/*<div className={'text-3xl font-mono'}>{dayValue.dayIndex}</div>*/}
                {/*<p className={'day-route-element'}><span className={'text-1xl font-bold'}>Morning:</span> {dayValue.morning}</p>*/}
                {/*<p className={'day-route-element'}><span className={'text-1xl font-bold'}>Day:</span> {dayValue.day}</p>*/}
                {/*<p className={'day-route-element'}><span className={'text-1xl font-bold'}>Evening:</span> {dayValue.evening}</p>*/}
                {/*<p className={'day-route-element'}><span className={'text-1xl font-bold'}>Start location:</span> {dayValue.startLocation.name}</p>*/}
                {/*<p className={'day-route-element'}><span className={'text-1xl font-bold'}>End location:</span> {dayValue.endLocation.name}</p>*/}
                {/*<p className={'day-route-element'}><span className={'text-1xl font-bold'}>Travel time (hours):</span> {dayValue.travelTime}</p>*/}

                <p><span className={'text-1xl font-bold'}>Links:</span>
                    <ol>
                        {Object.keys(dayValue.placesLinks).map((key, index) => (
                            <li key={index}><a className={'text-blue-600'} href={dayValue.placesLinks[key]}>{key}</a></li>
                        ))}
                    </ol>
                </p>
            </div>


        </div>
    </>)
}
