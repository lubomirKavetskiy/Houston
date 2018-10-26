import api from './api';
import tokenHelper from '../helpers/tokenHelper';
//import { history } from '../store';

const url = 'auth';

const authAPI = {
	signUp({ userName, email, password }) {
		return api.request({
			url,
			method: 'post',
			data: { userName, email, password }
		});
		// .then(res => {
		// 	tokenHelper.setToken(res.data.data.token);
		// });
	},

	signIn({ email, password }) {
		return api
			.request({
				url,
				method: 'post',
				data: { email, password }
			})
			.then(res => {
				const user = tokenHelper.getUser(res.data.data.token);
				tokenHelper.setToken(res.data.data.token);

				//history.push('/admin');

				return user;
			});
	}
};

export default authAPI;
