import React, { Component } from "react";

export default class Input extends Component {
    render() {
        return (
            <>
                <input className={`form-control form-control-${this.props.size}`} onChange={this.props.handleChange} />
            </>
        );
    }
}