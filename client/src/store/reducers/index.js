import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import orderReducer from './orderReducer';
import userDataReducer from './userDataReducer';
import beerReducer from './beerReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  order: orderReducer,
  user: userDataReducer,
  review: beerReducer
});
