import React, {Component} from "react";

export default class ToDoItems extends Component {

    constructor() {
        super();
        this.TodoList = JSON.parse(localStorage.ToDoList);
    }

    handleRemove(e) {
        this.TodoList.splice(e.target.tabIndex, 1);
        localStorage.ToDoList = this.TodoList;
    }

    render() {
        return (
            this.TodoList.map((item, index) => {
                return (
                    <li key={index}>
                        {item}
                        <button style={{backgroundColor: "red", color: "white", marginLeft: 5}}
                                onClick={this.props.handleRemove}
                                tabIndex={index}>
                            Remove
                        </button>
                    </li>
                )
            })
        );
    }
}