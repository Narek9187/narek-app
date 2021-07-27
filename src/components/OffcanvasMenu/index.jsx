import React, {Component} from "react";
import styles from "./offcanvas.module.scss";

export default class OffcanvasMenu extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return(
            <div className={`${styles.offcanvas} ${this.props.isOpen ? styles.is_open : ""}`}>
                {
                    this.props.NavLinks.map((el, index) => {
                        return (
                            <div className={`${styles.nav_item} ${index === 0 ? styles.is_active : ""}`} key={index}>
                                <a href={el.link}>{el.name}</a>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}