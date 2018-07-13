import {types} from './index';
import axios from 'axios';

function changeList(payload) {
  return {type: types.CHANGE_LIST, payload};
};

export function handleInputFocus(payload) {
  return {type: types.HANDLE_INPUT_FOCUSED, payload}
};

export function handleInputBlur(payload) {
  return {type: types.HANDLE_INPUT_BLUR, payload}
};

export function getList() {
  //值需获取一次
  console.log('getList:', getList);
  return (dispatch, getState) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data;
      dispatch(changeList(data.data))
    }).catch((err) => {
      console.error('err');
    });
  };
};

export function handleMouseEnter(){
  return {type:types.HANDLE_MOUSE_ENTER}
}

export function handleMouseLeave(){
  return {type:types.HANDLE_MOUSE_LEAVE}
}


export function handleChangePage(page,totalPage,spin){
  let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
  if(originAngle){
    originAngle = parseInt(originAngle, 10);
  }else{
    originAngle = 0;
  }
  spin.style.transform = 'rotate(' + (originAngle + 720) + 'deg)';

  let nextPage;
  page === totalPage ? nextPage = 1 : nextPage = page + 1;

  return {type:types.HANDLE_CHANGE_PAGE,payload:nextPage}
}
