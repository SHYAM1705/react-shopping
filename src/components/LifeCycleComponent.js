import React from "react";

class SuccessComponent extends React.Component {
    componentDidMount() {
        alert("success component mount");
    }
    componentWillUnmount() {
        alert("success component unmount");
    }
    render() {
        return (
            <div>
                <h2>Login success</h2>
            </div>
        )
    }
}
class ErrorComponent extends React.Component {

    componentDidMount() {
        alert("error component mount");
    }
    componentWillUnmount() {
        alert("error component unmount");
    }
    render() {
        return (
            <div>
                <h2>Invalid User</h2>
            </div>
        )
    }
}

export default class LifeCycleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            UserDetails: {
                UserName: 'john_nit',
                Password: 'john@11'
            },
            FormDetails: {
                UserName: '',
                Password: ''
            },
            Result: ''
        }
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleUsername(event) {
        this.setState({
            FormDetails: {
                UserName: event.target.value,
                Password: this.state.UserDetails.Password
            }
        })
    }

    handlePassword(event) {
        this.setState({
            FormDetails: {
                UserName: this.state.UserDetails.UserName,
                Password: event.target.Password
            }
        })
    }
    handleLoginClick() {
        if (this.state.FormDetails.UserName == this.state.UserDetails.UserName && this.state.FormDetails.Password == this.state.UserDetails.Password) {
            this.setState({
                Result: <SuccessComponent />
            })
        } else {
            this.setState({
                Result: <ErrorComponent />
            })
        }
    }

    render() {
        return (
            <div className="container">
                <dl>
                    <dt>User Name</dt>
                    <dd onChange={this.handleUsername}><input type="text" /></dd>
                    <dt>Password</dt>
                    <dd onChange={this.handlePassword}><input type="text" /></dd>
                </dl>
                <button onClick={this.handleLoginClick}>Login</button>
                <div>{this.state.Result}</div>
            </div>
        )
    }
}