import React from "react";
import {compose} from "redux";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStoreType} from "../../Redux/reduxStore";
import {getAuthUserDataMe, logoutTC,} from "../../Redux/AuthReducer";

type mapStatePropsType={
    isAuth: boolean,
    login: string | null,
}
type MapDispatchPropsType = {
    getAuthUserDataMe: () => void
    logoutTC:()=>void
}

type HeaderContainerPropsType = mapStatePropsType & MapDispatchPropsType

export class HeaderContainerComponent extends React.Component<HeaderContainerPropsType>{

    componentDidMount() {
            this.props.getAuthUserDataMe()
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state:AppStoreType):mapStatePropsType=>{
    return{
        isAuth:state.auth.isAuth,
        login:state.auth.login,
    }
}

export const HeaderContainer = compose<React.ComponentType>(connect<mapStatePropsType, MapDispatchPropsType, {}, AppStoreType>(mapStateToProps, {getAuthUserDataMe, logoutTC}))(HeaderContainerComponent)

/*
export default connect<mapStatePropsType, MapDispatchPropsType, {}, AppStoreType>(mapStateToProps, {getAuthUserDataMe})(HeaderContainerComponent*!/)*/
