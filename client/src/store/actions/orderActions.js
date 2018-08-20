import {
  FETCH_ORDER,
  FETCH_ORDERS,
  CLEAR_ERRORS,
  GET_ERRORS,
  CREATE_ORDER,
  LOADING
} from './types';
import axios from '../../axios/orderRoutes';

// Get Current Order
export const fetchOrder = id => async dispatch => {
  try {
    dispatch(loading());
    const orders = await axios.get(`/${id}`);
    dispatch({
      type: FETCH_ORDER,
      payload: orders.data
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

// Get all orders
export const fetchOrders = (user_id, id) => async dispatch => {
  try {
    dispatch(loading());
    const orders = await axios.get(`/${user_id}/${id}`);
    dispatch({
      type: FETCH_ORDERS,
      payload: orders.data
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const createOrder = id => async dispatch => {
  try {
    dispatch({
      type: CLEAR_ERRORS
    });
    const orders = await axios.post('/');
    dispatch({
      type: CREATE_ORDER,
      payload: orders.data
    });
    dispatch(fetchOrders());
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

const loading = dispatch =>
  dispatch({
    type: LOADING
  });
