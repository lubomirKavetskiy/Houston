import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

class Authentication extends Component {
  render() {
    return (
      <Fragment>
        {/* <LoginForm /> */}
        <RegisterForm />
      </Fragment>
    );
  }
}

export default Authentication;
