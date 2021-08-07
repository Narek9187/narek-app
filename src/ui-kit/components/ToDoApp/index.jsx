import React, { Component } from "react";
import Button from "../../common/Button";
import Input from "../../common/Input";
import ToDoList from "../ToDoList";

export default class ToDoApp extends Component {
    constructor() {
        super();
        this.state = {
            ToDoList: [],
            item: ""
        }
    }

    handleClick() {
        this.setState(prev => ({
            ...prev,
            ToDoList: [...this.state.ToDoList, this.state.item]
        }))
        localStorage.ToDoList = JSON.stringify(this.state.ToDoList);
    }

    handleChange(e) {
        this.setState(prev => ({
            ...prev,
            item: e.target.value
        }))
    }

    render() {
        return (
            <>
                <form  style={{margin: '5rem auto 0', width:'30%'}}>
                    <Input size="sm" handleChange={this.handleChange} />
                    <Button type="button" label="Add ToDo" color="danger" handleClick={this.handleClick} />
                </form>
                <ToDoList />
            </>
        );
    }
}