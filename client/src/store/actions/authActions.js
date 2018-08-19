import setAuthToken from '../../axios/setAuthToken';
import jwt_decode from 'jwt-decode';
import axios from '../../axios/userRoutes';

import { GET_ERRORS, SET_CURRENT_USER, CLEAR_ERRORS } from './types';

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
export const loginUser = (userData, history) => async dispatch => {
  try {
    // Log Current User Out
    dispatch(logoutUser(history));
    // Hit login route on backend
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
    // Redirect user to to the Homepage
    history.push('/homepage');
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

// Set logged in user
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded
});

// Log user out
export const logoutUser = history => dispatch => {
  // Remove token from localstorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  // Redirect to Login
  if (window.location.href !== '/login') {
    history.push('/login');
  }
};

export const clearErrors = () => ({ type: CLEAR_ERRORS });
