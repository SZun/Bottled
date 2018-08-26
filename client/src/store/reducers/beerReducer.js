import { LOADING, FETCH_BEER } from '../actions/types';

const initialState = {
  beer: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case FETCH_BEER:
      return {
        ...state,
        type: FETCH_BEER,
        beer: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
