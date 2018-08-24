import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import orderReducer from './orderReducer';
import userDataReducer from './userDataReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  order: orderReducer,
  user: userDataReducer
});
