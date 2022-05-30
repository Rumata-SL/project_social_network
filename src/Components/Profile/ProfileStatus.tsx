import React from "react";

type ProfileStatusTypeProps = {
    status: string
}


export class ProfileStatus extends React.Component<ProfileStatusTypeProps> {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
        // this.state.editMode = true
        // this.forceUpdate()
    }
    deActivateEditMode() {
        this.setState({
            editMode: false
        })
        // this.state.editMode = true
        // this.forceUpdate()
    }

    render() {
        let {status} = this.props;
        return (
            <>
                {!this.state.editMode
                    ? <div style={{color: "red"}}>
                <span onDoubleClickCapture={this.activateEditMode.bind(this)}>
                    {status}
                </span>
                    </div>
                    : <div>
                        <input value={status} onBlur={this.deActivateEditMode.bind(this)} autoFocus></input>
                    </div>}


            </>
        );
    }
}

