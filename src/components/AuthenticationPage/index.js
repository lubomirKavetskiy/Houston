import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import LoginForm from './LoginForm';
//import RegisterForm from './RegisterForm';
import { setUser } from '../../appActions/';
import authAPI from '../../api/authApi';
import './index.css';

class Authentication extends Component {
  state = {
    hasLogin: true,
  }

  componentDidMount() {
    const { user, setUser } = this.props;

    if (user) {
      setUser(null);
    }
  }

  showLoginForm = () => {
    this.setState(prevState => {
      if (!prevState.hasLogin) {
        return { hasLogin: true }
      }
    });
  }

  showRegisterForm = () => {
    this.setState(prevState => {
      if (prevState.hasLogin) {
        return { hasLogin: false }
      }
    });
  }

  logIn = values =>
    authAPI.signIn(values)
      .then(user => setUser(user))
  // .catch(formHelper.handleValidation);

  render() {
    const { hasLogin } = this.state;
    let subdomain = window.location.hostname;
    console.log(subdomain);

    return (
      <Fragment>
        <div>
          <div>
            <button className={hasLogin ? "active" : ""} onClick={this.showLoginForm}>log in</button>
            <button className={hasLogin ? "" : "active"} onClick={this.showRegisterForm}>register</button>
          </div>
          <div>
            {hasLogin
              ?
              <LoginForm onSubmit={this.logIn} />
              :
              // <RegisterForm onSubmit={() => console.log('RegisterSubmit')} />
              <span>RegisterForm</span>
            }
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.main.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    setUser,
  },
  dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
