import React from "react";

type ProfileStatusTypeProps = {
    status:string
    updateUserStatus:(status:string)=>void
}

export class ProfileStatus extends React.Component<ProfileStatusTypeProps> {
    state = {
        editMode: false
    }

    activateEditMode=()=>{
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode=()=>{
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus("Hello world!!!")
        // this.forceUpdate()
    }

    render() {
        let {status} = this.props;
        return (
            <>
                {!this.state.editMode
                    ? <div style={{color: "white", paddingLeft:"15px"}}>
                        status : <span onDoubleClickCapture={this.activateEditMode}>
                     {status}
                </span>
                    </div>
                    : <div>
                        <input value={"status"} onBlur={this.deActivateEditMode} autoFocus></input>
                    </div>}
            </>
        );
    }
}

