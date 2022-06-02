import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import AppReducer from './AppReducer';

const Reducers = combineReducers({
  LoginReducer: LoginReducer,
  AppReducer: AppReducer
});

export default Reducers;