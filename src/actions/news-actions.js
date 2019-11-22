import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
} from './action-types';
import newsApiService from '../services/newsApiService';

const newsRequested = () => {
  return {
    type: FETCH_NEWS_REQUEST,
  };
};

const newsLoaded = (newData) => {
  return {
    type: FETCH_NEWS_SUCCESS,
    payload: newData,
  };
};

const newsError = (error) => {
  return {
    type: FETCH_NEWS_FAILURE,
    payload: error,
  };
};

const fetchNews = (token) => (dispatch) => {
  dispatch(newsRequested());
  newsApiService
    .getNews(token)
    .then((data) => {
      dispatch(newsLoaded(data));
    })
    .catch((error) => dispatch(newsError(error)));
};

export default fetchNews;
