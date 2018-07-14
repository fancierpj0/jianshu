import axios from 'axios';
import * as types from './actionTypes';

const changeDetail = ((title, content) => ({
  type: types.CHANGE_DETAIL
  , payload: {
    title
    , content
  }
}));

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id='+id).then(res => {
      const result = res.data.data;
      dispatch(changeDetail(result.title, result.content))
    })
  };
};
