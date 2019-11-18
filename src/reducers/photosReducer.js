import {
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE,
  ADD_PHOTO_REQUEST,
  ADD_PHOTO_SUCCESS,
  ADD_PHOTO_FAILURE,
  REMOVE_PHOTO_REQUEST,
  REMOVE_PHOTO_SUCCESS,
  REMOVE_PHOTO_FAILURE,
} from '../actions/action-types';

const initialState = {
  photos: [],
  loading: true,
  error: null,
};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_REQUEST:
      return {
        photos: [],
        loading: true,
        error: null,
      };
    case FETCH_PHOTOS_SUCCESS:
      return {
        photos: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_PHOTOS_FAILURE:
      return {
        photos: [],
        loading: false,
        error: action.payload,
      };

    case ADD_PHOTO_REQUEST:
      return {
        ...state,
        error: null,
      };
    case ADD_PHOTO_SUCCESS:
      return {
        ...state,
        photos: [...state.photos, ...action.payload],
      };
    case ADD_PHOTO_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case REMOVE_PHOTO_REQUEST:
      return {
        ...state,
        error: null,
      };
    case REMOVE_PHOTO_SUCCESS: {
      return {
        ...state,
        photos: state.photos.filter(({ _id }) => _id !== action.payload._id),
      };
    }
    case REMOVE_PHOTO_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default photosReducer;
