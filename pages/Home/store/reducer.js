import * as types from './actionTypes';
import {fromJS} from 'immutable';

const initState = fromJS({
  topicList:[]
  ,articleList:[]
  ,recommendList:[]
  ,articlePage:1
  ,showScroll:false
});

export default (state = initState, action) => {
  switch (action.type) {

    case types.INIT_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.payload.topicList)
        , articleList: fromJS(action.payload.articleList)
        , recommendList: fromJS(action.payload.recommendList)
      });

    case types.ADD_HOME_LIST:
      // console.log('action:', action);
      return state.merge({
        'articleList':state.get('articleList').concat(action.payload.data)
        ,'articlePage':action.payload.nextPage
      });

    case types.CHANGE_TOP_SHOW:
      return state.set('showScroll', action.payload);
    default:
      break;
  }

  return state;
};
