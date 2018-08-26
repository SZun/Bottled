import { LOADING, FETCH_BEER, GET_ERRORS } from './types';
import axios from '../../axios/beerRoutes';

export const fetchBeer = (beer, history) => async dispatch => {
  try {
    dispatch(loading());
    const res = await axios.post('/', beer);
    dispatch({
      type: FETCH_BEER,
      payload: res.data
    });
    history.push(`/reviews/${res.data._id}`);
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

const loading = () => ({ type: LOADING });
