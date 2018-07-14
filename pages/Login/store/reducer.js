import * as types from './actionTypes';
import {fromJS} from 'immutable';

const initState = fromJS({
  login:false
});

export default (state = initState, action) => {
  switch (action.type) {
    case types.CHANGE_LOGIN:
      return state.set('login', action.payload);

    case types.LOGOUT:
      return state.set('login', action.payload);
    default:
      break;
  }

  return state;
};
