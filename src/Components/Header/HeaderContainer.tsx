import React from "react";
import {compose} from "redux";
import {Header} from "./Header";
import {connect} from "react-redux";
import { logoutTC,} from "../../Redux/reducers/AuthReducer";
import {AppStoreType} from "../../Redux/reducers/reduxStore";

type mapStatePropsType = {
    isAuth: boolean,
    login: string | null,
}
type MapDispatchPropsType = {
    logoutTC: () => void
}

type HeaderContainerPropsType = mapStatePropsType & MapDispatchPropsType

export class HeaderContainerComponent extends React.Component<HeaderContainerPropsType> {

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state: AppStoreType): mapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export const HeaderContainer = compose<React.ComponentType>(
    connect<mapStatePropsType, MapDispatchPropsType, {}, AppStoreType>(mapStateToProps, {logoutTC}))(HeaderContainerComponent)

/*
export default connect<mapStatePropsType, MapDispatchPropsType, {}, AppStoreType>(mapStateToProps, {getAuthUserDataMe})(HeaderContainerComponent*!/)*/
