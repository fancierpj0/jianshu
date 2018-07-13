import {types} from './index';
import {fromJS} from 'immutable';

const initState = fromJS({
  focused: false
});

export default (state = initState, action) => {
  switch (action.type) {
    case types.HANDLE_INPUT_FOCUSED:
      return state.set('focused',true);

    case types.HANDLE_INPUT_BLUR:
      return state.set('focused',false);

    default:
      break;
  }

  return state;
};
