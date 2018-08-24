import {
  FETCH_NOT_PURCHASED,
  FETCH_PURCHASED,
  GET_ERRORS,
  CREATE_ORDER,
  DELETE_ORDER,
  PURCHASE_ORDER
} from '../actions/types';
import axios from '../../axios/orderRoutes';

// Create an Order
export const createOrder = beer => async dispatch => {
  try {
    await axios.post('/', beer);
    dispatch({
      type: CREATE_ORDER
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

// Delete Order
export const deleteOrder = id => async dispatch => {
  try {
    await axios.delete(`/${id}`);
    dispatch({
      type: DELETE_ORDER
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

// Fetch Purchased Orders
export const fetchPurchased = () => async dispatch => {
  try {
    const res = await axios.get('/purchased');
    dispatch({
      type: FETCH_PURCHASED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

// Fetch unpurchased
export const fetchNotPurchased = () => async dispatch => {
  try {
    const res = await axios.get('/notpurchased');
    dispatch({
      type: FETCH_NOT_PURCHASED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

// Purchase Orders
export const purchaseOrders = card => async dispatch => {
  try {
    await axios.put('/checkout', card);
    dispatch({
      type: PURCHASE_ORDER
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};
