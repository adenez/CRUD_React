import React from 'react';
import AddUser from "./AddUser";
import {IoCloseCircleSharp, IoHammerSharp} from "react-icons/io5";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editForm: false
        }
    }

    user = this.props.user

    render() {
        return (
            <div className="user">
                <IoCloseCircleSharp className="remove-icon" onClick={() => this.props.onDelete(this.user.id)}/>
                <IoHammerSharp className="edit-icon" onClick={() => {
                    this.setState({
                        editForm: !this.state.editForm
                    })
                }}/>
                <h3>ФИО: {this.user.first_name} {this.user.last_name}</h3>
                <p>E-mail: {this.user.email}</p>
                <img src={this.user.avatar}/>

                {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit}/>}
            </div>
        )
    }
}

export default User