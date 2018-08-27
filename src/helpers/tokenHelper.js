import jwtDecode from 'jwt-decode';

const tokenHelper = {
  getUser(token = this.getToken()) {
    if (!token) {
      return null;
    }

    const user = jwtDecode(token).user;

    return user;
  },

  getToken() {
    console.log(1, localStorage.getItem('pp-tkn'));
    return localStorage.getItem('pp-tkn');
  },

  setToken(token) {
    if (!token) {
      console.log(4);
      localStorage.removeItem('pp-tkn');
    } else {
      localStorage.setItem('pp-tkn', token);
    }
  },
};

export default tokenHelper;
