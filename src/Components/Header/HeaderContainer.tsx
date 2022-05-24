import axios from "axios";
import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStoreType} from "../../Redux/reduxStore";
import {

    getAuthUserDataMe,
    setAuthUserData
} from "../../Redux/AuthReducer";
import {authApi} from "../../API/api";
import {compose} from "redux";

type mapStatePropsType={
    isAuth: boolean,
    login: string | null,
}
type MapDispatchPropsType = {
    // setAuthUserData: (id: number, email: string, login: string) => void
    getAuthUserDataMe: () => void
}

type HeaderContainerPropsType = mapStatePropsType & MapDispatchPropsType

export class HeaderContainerComponent extends React.Component<HeaderContainerPropsType>{

    componentDidMount() {
            this.props.getAuthUserDataMe()
        /*authApi.getMe().then(response => {
            if(response.data.resultCode === 0 ){
                let { id, email, login}= response.data.data
                this.props.setAuthUserData(id, email, login)
            }
        })*/

        /*axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true})
            .then(response => {
                if(response.data.resultCode === 0 ){
                    let { id, email, login}= response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })*/
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

function copmpose() {

}

export const HeaderContainer = compose<React.ComponentType>(connect<mapStatePropsType, MapDispatchPropsType, {}, AppStoreType>(mapStateToProps, {getAuthUserDataMe}))(HeaderContainerComponent)

/*
export default connect<mapStatePropsType, MapDispatchPropsType, {}, AppStoreType>(mapStateToProps, {getAuthUserDataMe})(HeaderContainerComponent*!/)*/
