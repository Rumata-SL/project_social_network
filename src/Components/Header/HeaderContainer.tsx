import axios from "axios";
import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStoreType} from "../../Redux/reduxStore";
import {setAuthUserData} from "../../Redux/AuthReducer";

type mapStatePropsType={
    isAuth: boolean,
    login: string | null,
}
type MapDispatchPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void
}

type HeaderContainerPropsType = mapStatePropsType & MapDispatchPropsType

export class HeaderContainer extends React.Component<HeaderContainerPropsType>{

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true})
            .then(response => {
                if(response.data.resultCode === 0 ){
                    let { id, email, login}= response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
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

export default connect<mapStatePropsType, MapDispatchPropsType, {}, AppStoreType>(mapStateToProps, {setAuthUserData})(HeaderContainer)