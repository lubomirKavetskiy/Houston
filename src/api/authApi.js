import api from './api';
import tokenHelper from '../helpers/tokenHelper';
import history from '../helpers/historyHelper';

const url = 'auth';

const authAPI = {
  signIn({ id, email, password }) {
    return api.request({
      url,
      method: 'post',
      data: { email, password },
    }).then(res => {
      const user = tokenHelper.getUser(res.data.data.token);
      tokenHelper.setToken(res.data.data.token);

      history.push('/admin');

      return user;
    });
  },
};

export default authAPI;