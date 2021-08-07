import React, { Component } from "react";

export default class Button extends Component {
    render() {
        return (
            <>
                <button type={this.props.type}
                        className={`btn btn-${this.props.color}`}
                        onClick={this.props.handleClick} style={{margin: '1rem 0 0 40%'}}>
                    { this.props.label }
                </button>
            </>
        );
    }
}