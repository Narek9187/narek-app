import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import styles from './header.module.scss';


export default class Header extends Component {
    constructor(props) {
        super();
        this.state = {
            freeText: ""
        };
        this.textInput = React.createRef();
        this.addNavItem = this.addNavItem.bind(this);
    }

    addNavItem() {
        this.setState(prev => ({
            ...prev,
            freeText: this.textInput.current.value
        }))
    }

    render() {
        return (
            <header className={styles.header}>
                <div className={styles.logo}>
                    <NavLink to="/">
                        <img src={this.props.logo.src} alt={this.props.logo.name} />
                    </NavLink>
                </div>
                <div className={styles.navMain}>
                    {
                        this.props.NavLinks.map((el, index) => {
                            return (
                                <div className={`${styles.nav_item} ${index === 0 ? styles.is_active : ""}`} key={index}>
                                    <a href={el.link}>{el.name}</a>
                                </div>
                            )
                        })
                    }
                    <div className={`${styles.nav_item}`} >
                        <NavLink to="/login" activeClassName={`${styles.is_active}`}>Login</NavLink>
                    </div>
                    {this.state.freeText}
                </div>
                <div className={styles.widgets}>
                    <div className={`${styles.entry_item} ${styles.entry_account}`}>
                        <button className={`${styles.account_btn} ${styles.entry_btn} btn`}>
                            <i className="fas fa-user"></i>
                        </button>
                    </div>
                    <div className={`${styles.entry_item} ${styles.entry_search}`}>
                        <button className={`${styles.search_btn} ${styles.entry_btn} btn`}>
                            <i className="fas fa-search"></i>
                        </button>
                        <div className={`${styles.input_box}`}>
                            <input type="text" ref={this.textInput} />
                            <button className={`btn-dark col-12`} onClick={this.addNavItem}>Add</button>
                        </div>
                    </div>
                    <div className={`${styles.entry_item} ${styles.entry_cart}`}>
                        <button className={`${styles.cart_btn} ${styles.entry_btn} btn`} onClick={this.props.showSidebar}>
                            {this.props.isOpen ? "Close" : <i className="fas fa-shopping-cart"></i>}
                        </button>
                    </div>
                </div>
            </header>
        );
    }
}