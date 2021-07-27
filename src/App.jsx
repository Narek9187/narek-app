import React, {Component} from "react";
import {
  Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import {history} from './components/History';
import PrivateRoute from './components/PrivateRoutes';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import OffcanvasMenu from "./components/OffcanvasMenu";
import Auth from "./components/Auth";
import User from "./components/User";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./components/base.module.scss"

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            freeText: "",
            logo: {
                "name": "React-logo",
                "src": "https://react-query.tanstack.com/_next/static/images/emblem-light-5d1cdce6c8bbb006ac6cefb8e1642877.svg"
            },
            NavLinks: [
                {
                    "name": "React",
                    "link": "https://reactjs.org/"
                },
                {
                    "name": "Node",
                    "link": "https://nodejs.org/"
                },
                {
                    "name": "Express",
                    "link": "https://expressjs.com/"
                }
            ],
            isOpen: false
        };
        this.showSidebar = this.showSidebar.bind(this);
    }

    showSidebar() {
        this.setState(prev => ({
            ...prev,
            isOpen: !this.state.isOpen
        }))
    }

    render() {
        return (
            <Router history = {history}>
                <Header freeText={this.state.freeText} logo={this.state.logo} NavLinks={this.state.NavLinks}
                        showSidebar={this.showSidebar} isOpen={this.state.isOpen}/>
                <Main/>
                <Footer/>
                <OffcanvasMenu freeText={this.state.freeText} logo={this.state.logo} NavLinks={this.state.NavLinks}
                               isOpen={this.state.isOpen}/>
                <div className={`${styles.overlay} ${this.state.isOpen ? styles.is_open : ""}`}
                     onClick={this.showSidebar}/>
                <Switch>
                    <Route exact path='/login'>
                        <Auth/>
                    </Route>
                    <PrivateRoute exact path='/user' component={User} />
                </Switch>
            </Router>
        )
    }

}
