import { GET_USER_DATA } from '../actions/types';

const initialState = {
  userData: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
        userData: action.payload
      };
    default:
      return state;
  }
}
