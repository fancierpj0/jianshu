import axios from 'axios';
import * as types from './actionTypes';

const changeLogin = () => ({
  type:types.CHANGE_LOGIN
  ,payload:true
});

export const login = (account,password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password).then(res => {
      const result = res.data.data;
      if(result){
        dispatch(changeLogin())
      }else{
        alert('登录失败');
      }
    });
  };
};


export const logout = () => ({
  type:types.LOGOUT
  ,payload:false
});
