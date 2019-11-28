import { combineReducers } from 'redux';
import photosReducer from './photosReducer';
import newsReducer from './newsReducer';
import userReducer from './userReducer';
import tasksReducer from './tasksReducer';

export default combineReducers({
  userReducer,
  photosReducer,
  newsReducer,
  tasksReducer,
});
