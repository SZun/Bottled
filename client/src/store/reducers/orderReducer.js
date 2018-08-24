import {
  FETCH_NOT_PURCHASED,
  FETCH_PURCHASED,
  LOADING,
  CREATE_ORDER,
  DELETE_ORDER
} from '../actions/types';

const initialState = {
  loading: false,
  purchased: {},
  notPurchased: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case FETCH_PURCHASED:
      return {
        ...state,
        purchased: action.payload,
        loading: false
      };
    case FETCH_NOT_PURCHASED:
      return {
        ...state,
        notPurchased: action.payload,
        loading: true
      };
    case CREATE_ORDER:
      return {
        ...state
      };
    case DELETE_ORDER:
      return {
        ...state
      };
    default:
      return state;
  }
}
