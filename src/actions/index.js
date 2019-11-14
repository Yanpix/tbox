import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from './action-types';

const dataRequested = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

const dataLoaded = (newData) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: newData,
  };
};

const dataError = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};

const fetchData = (dataService) => () => (dispatch) => {
  dispatch(dataRequested());
  dataService
    .getData()
    .then((data) => dispatch(dataLoaded(data)))
    .catch((error) => dispatch(dataError(error)));
};

export default fetchData;
