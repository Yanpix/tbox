import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
} from '../actions/action-types';

const initialState = {
  news: [],
  loading: true,
  error: null,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return {
        news: [],
        loading: true,
        error: null,
      };
    case FETCH_NEWS_SUCCESS:
      return {
        news: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_NEWS_FAILURE:
      return {
        news: [],
        loading: false,
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default newsReducer;
