import React, {ChangeEvent} from "react";

type ProfileStatusTypeProps = {
    status: string
    updateUserStatus: (status: string) => void
}

type LocalStateType = {
    editMode: boolean
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusTypeProps> {

    state: LocalStateType = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateUserStatus(this.state.status)
        // this.forceUpdate()
    }
    onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState(
            {
                status: e.currentTarget.value
            }
        )
    }
    componentDidUpdate(prevProps: Readonly<ProfileStatusTypeProps>, prevState: Readonly<{}>, snapshot?: any) {
        // console.log("update")
        // console.log(prevProps)
        // console.log(prevState)
        if (prevProps.status !== this.props.status){
            this.setState({status: this.props.status})
        }
    }

    render() {
        let {status} = this.props;
        return (
            <>
                {!this.state.editMode
                    ? <div style={{color: "white", paddingLeft: "15px"}}>
                        status : <span
                        onDoubleClick={this.activateEditMode}>
                     {/*{status}*/}
                     {status || "No status"}
                </span>
                    </div>
                    : <div>
                        <input onChange={this.onChangeStatusHandler}
                               value={this.state.status}
                               onBlur={this.deActivateEditMode}
                               autoFocus>

                        </input>
                    </div>}
            </>
        );
    }
}

