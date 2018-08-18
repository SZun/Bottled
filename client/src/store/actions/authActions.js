import setAuthToken from '../../axios/setAuthToken';
import jwt_decode from 'jwt-decode';
import axios from '../../axios/userRoutes';

import { GET_ERRORS, SET_CURRENT_USER } from './types';

// SignUp User
export const registerUser = (userData, history) => async dispatch => {
  try {
    await axios.post('/signup', userData);
    history.push('/login');
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

// Login Get User Token
export const loginUser = userData => async dispatch => {
  try {
    const user = await axios.post('/login', userData);
    // Save to local storage
    const { token } = user.data;
    // Set token to ls
    localStorage.setItem('jwtToken', token);
    // Set token to auth header
    setAuthToken(token);
    // Decode token to get user darta
    const decoded = jwt_decode(token);
    // Set current user
    dispatch(setCurrentUser(decoded));
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localstorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
