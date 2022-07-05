import React, {ComponentType} from "react";
import {Preloader} from "../common/preloader/Preloaded";

export const withSuspense = <T extends any>(Wrapper: ComponentType<T>) => (props: any) => {
    let {...restProps} = props
    return <React.Suspense fallback={<Preloader/>}>
        <Wrapper {...restProps}/>
    </React.Suspense>
};


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

