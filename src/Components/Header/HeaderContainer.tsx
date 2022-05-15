import React, {FC} from "react";
import {Header} from "./Header";
import {AppStoreType} from "../../Redux/reduxStore";



type HeaderContainerPropsType={
}

export class HeaderContainer extends React.Component<HeaderContainerPropsType>{
    render() {
        return (
            <Header {...this.props}/>
        );
    }
};


const mapStateToProps = (state:AppStoreType)=>{
    return{

    }
}