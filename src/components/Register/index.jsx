import React, { Component } from "react";
import { history } from '../History';
import styles from './register.module.scss'

export default class Register extends Component {
    constructor(props) {
        super();
        this.fieldSet = this.fieldSet.bind(this);
        this.register = this.register.bind(this);
        this.err = false;
    }

    register(event) {
        event.preventDefault();
        if(this.state.password === this.state.repeat) {
            if (!localStorage.users) {
                const Users = [
                    {"login": this.state.login, "password": this.state.password}
                ];
                localStorage.users = JSON.stringify(Users);
                localStorage.token = true;
                return history.push("/user");
            }else {
                const Users = JSON.parse(localStorage.getItem("users"));
                const Exist = Users.find(user => this.state.login === user.login);
                if(Exist) return alert("Login already exists!");
                Users.push({"login": this.state.login, "password": this.state.password});
                localStorage.users = JSON.stringify(Users);
                history.push("/user");
            }
        }
        this.err = true;
        this.setState({});
    }

    fieldSet(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return(
            <div>
                <form onSubmit={this.register} className={styles.form}>
                    <input type="text" name='login' placeholder='login' onChange={this.fieldSet} />
                    <input type="password" name='password' placeholder='password' onChange={this.fieldSet} />
                    <input type="password" name='repeat' placeholder='repeat password' onChange={this.fieldSet}
                           className={`${this.err ? styles.is_error : ""}`} />
                    <button>Register</button>
                </form>
            </div>
        )
    }
}
