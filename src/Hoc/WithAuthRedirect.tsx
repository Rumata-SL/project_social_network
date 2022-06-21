import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {AppStoreType} from "../Redux/reducers/reduxStore";

type MapStatePropsType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppStoreType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
})

export function WithAuthRedirect<T>(Component: ComponentType<T>) {

    class RedirectComponent extends React.Component<MapStatePropsType> {
        render() {
            let {isAuth, ...restProps} = this.props
            return !isAuth
                ? <Redirect to={"/login"}/>
                : <Component {...restProps as T}/>
        }
    }

    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedRedirectComponent
};
