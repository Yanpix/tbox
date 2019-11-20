import { combineReducers } from 'redux';
import photosReducer from './photosReducer';
import newsReducer from './newsReducer';

export default combineReducers({
  photosReducer,
  newsReducer,
});
