import { combineReducers } from 'redux';
import photosReducer from './photosReducer';
import newsReducer from './newsReducer';
import userReducer from './userReducer';

export default combineReducers({
  userReducer,
  photosReducer,
  newsReducer,
});
