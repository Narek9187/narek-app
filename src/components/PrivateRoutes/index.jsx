import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';

export default class PrivateRoute extends Component {
  constructor() {
    super();
    this.isCheck = localStorage.token;
    this.users = localStorage.users;
  }

  render() {
    return this.isCheck ? <Route {...this.props} user={JSON.parse(this.users)} /> : <Redirect to="/login" />;
  }
}
