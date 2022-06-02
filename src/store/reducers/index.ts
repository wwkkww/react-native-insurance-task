import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import AppReducer from './AppReducer';

const Reducers = combineReducers({
  UserInfo: LoginReducer,
  AppInfo: AppReducer
});

export default Reducers;