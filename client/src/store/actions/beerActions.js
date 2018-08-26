import { LOADING, POST_BEER, GET_ERRORS, FETCH_BEER } from './types';
import axios from '../../axios/beerRoutes';

export const postBeer = (beer, history) => async dispatch => {
  try {
    dispatch(loading());
    const res = await axios.post('/', beer);
    dispatch({
      type: POST_BEER
    });
    history.push(`/reviews/${res.data._id}`);
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const fetchBeer = id => async dispatch => {
  try {
    dispatch(loading());
    const res = await axios.get(`/${id}`);
    dispatch({
      type: FETCH_BEER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

const loading = () => ({ type: LOADING });
