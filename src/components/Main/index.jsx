import React, {Component} from "react";


export default class Main extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    increase() {
        this.setState(prev => ({
            ...prev,
            count: this.state.count + 1
        }))
    }

    decrease() {
        this.setState(prev => ({
            ...prev,
            count: this.state.count - 1
        }))
    }

    render() {
        return (
            <main>
                <h1>Main</h1>
                <button onClick={this.increase}>plus</button>
                <button onClick={this.decrease}>min</button>
                <h2>{this.state.count}</h2>
            </main>
        );
    }
}