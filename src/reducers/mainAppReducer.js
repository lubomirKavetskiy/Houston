import { SET_USER } from '../appActions';
const initialState = {
  user: null,
}

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload.user,
      }

    default: return state;
  }
}
