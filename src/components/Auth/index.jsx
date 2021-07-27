import React, { Component } from "react";
import { history } from '../History';
import { Redirect, NavLink } from 'react-router-dom';
import styles from "./auth.module.scss"

export default class Auth extends Component {
    constructor(props) {
        super();
        this.db = [
            {
                "login": "john",
                "password": "qwerty"
            },
            {
                "login": "george",
                "password": "8989"
            },
            {
                "login": "Cherry",
                "password": "boom"
            }
        ]
        this.setData = this.setData.bind(this);
        this.check = this.check.bind(this);
    }

    check(event) {
        event.preventDefault();
        const User = this.db.find(user => user.login === this.state.login);
        if(User) {
            localStorage.user = JSON.stringify(this.state);
            localStorage.token = true;
            return history.push("/user");
        }
    }

    setData(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return(
            <div className={styles.login}>
                <form onSubmit={this.check}>
                    <input type="text" name='login' placeholder='login' onChange={this.setData} />
                    <input type="text" name='password' placeholder='password' onChange={this.setData} />
                    <button>Login</button>
                    <NavLink to="/register" className={styles.register}>You don't have any account?</NavLink>
                </form>
            </div>
        )
    }
}
