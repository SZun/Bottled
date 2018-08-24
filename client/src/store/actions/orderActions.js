import {
  FETCH_NOT_PURCHASED,
  FETCH_ALL_ORDERS,
  GET_ERRORS,
  LOADING,
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

// Fetch All Orders
export const fetchAllOrders = () => async dispatch => {
  try {
    const purchased = await axios.get('/purchased');
    const notPurchased = await axios.get('/notpurchased');
    dispatch({
      type: FETCH_ALL_ORDERS,
      payload: [purchased, notPurchased]
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
export const purchaseOrders = (card, history) => async dispatch => {
  try {
    await axios.put('/checkout', card);
    dispatch({
      type: PURCHASE_ORDER
    });
    history.push('/orders');
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};
