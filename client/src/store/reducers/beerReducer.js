import {
  LOADING,
  FETCH_BEER,
  POST_BEER,
  ADD_COMMENT,
  DELETE_COMMENT
} from '../actions/types';

const initialState = {
  review: {},
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
        review: action.payload,
        loading: false
      };
    case POST_BEER:
      return {
        ...state
      };
    case ADD_COMMENT:
      return {
        ...state,
        review: action.payload,
        loading: false
      };
    case DELETE_COMMENT:
      return {
        ...state,
        review: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
