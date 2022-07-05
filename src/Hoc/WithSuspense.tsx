import React, {ComponentType} from "react";
import {Preloader} from "../common/preloader/Preloaded";


/*export function withSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    return (props: any) => {
        let {...restProps} = props
        return (
            <React.Suspense fallback={<Preloader/>}>
                <WrappedComponent {...restProps as WCP}/>
            </React.Suspense>
        )
    }
}*/


export function withSuspense<T>(Component: ComponentType<T>) {
    return (props: any) => {
        return <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </React.Suspense>
    }
}