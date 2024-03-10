import React from 'react';

class AddUser extends React.Component {
    userAdd = {}

    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: ""
        }
    }

    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input placeholder="Имя" onChange={(e) => this.setState({first_name: e.target.value})}/>
                <input placeholder="Фамилия" onChange={(e) => this.setState({last_name: e.target.value})}/>
                <textarea placeholder="E-mail" onChange={(e) => this.setState({email: e.target.value})}/>
                <label htmlFor="isWorker">Имеет работу</label>
                <input type="checkbox" id="isWorker" onChange={(e) => this.setState({isWorker: e.target.checked})}/>
                <button type="button" onClick={() => {
                    this.myForm.reset()
                    this.userAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        email: this.state.email
                    }
                    if (this.props.user) {
                        this.userAdd.id = this.props.user.id
                    }
                    this.props.onAdd(this.userAdd)
                }}>Добавить запись
                </button>
            </form>
        )
    }
}

export default AddUser