import jwtDecode from 'jwt-decode';

const tokenHelper = {
	getUser(token = this.getToken()) {
		if (!token) {
			return null;
		}

		const user = jwtDecode(token).user;

		return user;
	},

	setToken(token) {
		if (!token) {
			localStorage.removeItem('houston-tkn');
		} else {
			localStorage.setItem('houston-tkn', token);
		}
	},

	getToken() {
		return localStorage.getItem('houston-tkn');
	}
};

export default tokenHelper;
