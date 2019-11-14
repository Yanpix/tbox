import { combineReducers } from 'redux';
import updateDataList from './updateDataList';
import someReducer from './someReducer';

export default combineReducers({
  someReducer,
  updateDataList,
});
