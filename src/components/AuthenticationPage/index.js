import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import PropTypes from 'prop-types';

import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import { setUser } from '../../appActions/';
import authAPI from '../../api/authApi';
import './index.css';

class Authentication extends Component {
	state = {
		hasLogin: true
	};

	componentDidMount() {
		const { user, setUser } = this.props;

		if (user) {
			setUser(null);
		}
	}

	showSignUpForm = () => {
		this.setState(prevState => {
			if (prevState.hasLogin) {
				return { hasLogin: false };
			}
		});
	};

	showSignInForm = () => {
		this.setState(prevState => {
			if (!prevState.hasLogin) {
				return { hasLogin: true };
			}
		});
	};

	signUp = values => console.log(values);
	//signUp = values => authAPI.signUp(values).then(user => setUser(user));
	signIn = values => authAPI.signIn(values).then(user => setUser(user));
	// .catch(formHelper.handleValidation);

	render() {
		const { hasLogin } = this.state;
		let subdomain = window.location.hostname;
		console.log(subdomain);

		return (
			<Fragment>
				<div>
					<div>
						<button
							className={hasLogin ? 'active' : ''}
							onClick={this.showSignInForm}
						>
							Sign In
						</button>
						<button
							className={hasLogin ? '' : 'active'}
							onClick={this.showSignUpForm}
						>
							Sign Up
						</button>
					</div>
					<div>
						{hasLogin ? (
							<SignInForm onSubmit={this.signIn} />
						) : (
							<SignUpForm onSubmit={this.signUp} />
						)}
					</div>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	user: state.main.user
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			setUser
		},
		dispatch
	);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Authentication);
