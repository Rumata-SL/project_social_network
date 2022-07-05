import React, {ComponentType} from "react";
import {Preloader} from "../common/preloader/Preloaded";


/*export function withSuspense<WCP>(Wrapper: React.ComponentType<WCP>) {
    return (props: any) => {
        let {...restProps} = props
        return (
            <React.Suspense fallback={<Preloader/>}>
                <Wrapper {...restProps as WCP}/>
            </React.Suspense>
        )
    }
}*/


export function withSuspense<T>(Wrapper: ComponentType<T>) {
    return (props: any) => {
    let {...restProps} = props
        return <React.Suspense fallback={<Preloader/>}>
            <Wrapper {...restProps}/>
        </React.Suspense>
    }
}
