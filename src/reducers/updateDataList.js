import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from '../actions/action-types';

const initialState = {
  data: ['one', 'two'],
  loading: true,
  error: null,
};

const updateDataList = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        data: [],
        loading: true,
        error: null,
      };

    case FETCH_DATA_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: null,
      };

    case FETCH_DATA_FAILURE:
      return {
        data: [],
        loading: false,
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default updateDataList;
