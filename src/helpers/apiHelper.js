import tokenHelper from './tokenHelper';
import { history } from '../store';
const apiHelper = {
	handleError(reject) {
		return error => {
			if (error.response) {
				const { status } = error.response;

				switch (status) {
					case 401:
						tokenHelper.setToken();
						history.push('/authentication');
						break;
					case 403:
						tokenHelper.setToken();
						history.push('/403');
						break;
					case 404:
						history.push('/404');
						break;
				}
			}
			reject(error);
		};
	}
};

export default apiHelper;
