import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import orderReducer from './orderReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  order: orderReducer
});
