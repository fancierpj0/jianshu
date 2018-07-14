import {combineReducers} from 'redux-immutable';
import {reducer as header} from '../common/Header/store';
import {reducer as home} from '../pages/Home/store';

export default combineReducers({
  header
  ,home
})
