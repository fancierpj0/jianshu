import {types} from './index';
import {fromJS} from 'immutable';

const initState = fromJS({
  focused: false

  //用了fromJS 里面的对象也会变成immutable
  ,list:[]
  ,page:1
  ,totalPage:1
  ,mouseIn:false
});

export default (state = initState, action) => {
  switch (action.type) {
    case types.HANDLE_INPUT_FOCUSED:
      return state.set('focused',true);

    case types.HANDLE_INPUT_BLUR:
      return state.set('focused',false);

    case types.CHANGE_LIST:
      let totalPage = Math.ceil(action.payload.length / 10);
      // return state.set('list', fromJS(action.payload)).set('totalPage',totalPage);
      return state.merge({
        list: action.payload
        , totalPage
      });

    case types.HANDLE_MOUSE_ENTER:
      return state.set('mouseIn', true);

    case types.HANDLE_MOUSE_LEAVE:
      return state.set('mouseIn', false);

    case types.HANDLE_CHANGE_PAGE:
      return state.set('page', action.payload);

    default:
      break;
  }

  return state;
};
