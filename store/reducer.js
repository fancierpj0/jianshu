import {combineReducers} from 'redux-immutable';
import {reducer as header} from '../common/Header/store';
import {reducer as home} from '../pages/Home/store';
import {reducer as detail} from '../pages/Detail/store';
import {reducer as login} from '../pages/Login/store';

export default combineReducers({
  header
  ,home
  ,detail
  ,login
})
