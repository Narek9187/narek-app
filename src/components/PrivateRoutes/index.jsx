import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';

export default class PrivateRoute extends Component {
  constructor() {
    super();
    this.isCheck = localStorage.token;
    this.user = localStorage.user;
  }

  render() {
    console.log(this);
    return this.isCheck ? <Route {...this.props} user={JSON.parse(this.user)} /> : <Redirect to="/login" />;
  }
}
