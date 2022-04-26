import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";

const mapStateToProps = () => {

}
const mapDispatchToProps = () => {

}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)