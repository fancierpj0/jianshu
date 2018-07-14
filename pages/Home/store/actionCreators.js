import axios from "axios/index";
import * as types from './actionTypes';
import {fromJS} from 'immutable';

export function initData() {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      const action = {
        type: types.INIT_HOME_DATA
        , payload: {
          topicList: result.topicList
          , articleList: result.articleList
          , recommendList: result.recommendList
        }
      };
      dispatch(action)
    }).catch((e) => {
      console.error('err');
    });
  };
}

export function loadMore(page) {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data;
      const action = {
        type: types.ADD_HOME_LIST
        , payload: {
          data: fromJS(result)
          , nextPage: page + 1
        }
      };
      dispatch(action)
    }).catch((e) => {
      console.error('err');
    });
  };
}


export function changeScrollTopShow(ev){
  if(document.documentElement.scrollTop>300){
    return {type:types.CHANGE_TOP_SHOW,payload:true}
  }else{
    return {type:types.CHANGE_TOP_SHOW,payload:false}
  }
}
