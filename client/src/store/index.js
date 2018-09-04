import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

let composeEnhancers;
process.env.NODE_ENV === 'production'
  ? (composeEnhancers = applyMiddleware(...middleware))
  : (composeEnhancers = compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

const store = createStore(rootReducer, initialState, composeEnhancers);

export default store;
