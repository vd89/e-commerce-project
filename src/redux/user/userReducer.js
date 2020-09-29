import { SET_CURRENT_USER } from '../types';

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
