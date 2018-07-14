import * as types from './actionTypes';
import {fromJS} from 'immutable';

const initState = fromJS({
  title:'基础款 | 玩转整个夏天，你只需要5件基础款！'
  ,content:''
});

export default (state = initState, action) => {
  switch (action.type) {
    case types.CHANGE_DETAIL:
      return state.merge({
        title: action.payload.title
        , content: action.payload.content
      });

    default:
      break;
  }

  return state;
};
