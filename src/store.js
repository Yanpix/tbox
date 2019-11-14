import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

const ReduxLogger = ({ getState }) => (next) => (action) => {
  console.log('=================================');
  console.log(action.type, getState());
  console.log('=================================');
  return next(action);
};

const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk, ReduxLogger)
);

export default store;
