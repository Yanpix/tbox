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
} from './action-types';
import photosApiService from '../services/photosApiService';

const photosRequested = () => {
  return {
    type: FETCH_PHOTOS_REQUEST,
  };
};

const photosLoaded = (newData) => {
  return {
    type: FETCH_PHOTOS_SUCCESS,
    payload: newData,
  };
};

const photosError = (error) => {
  return {
    type: FETCH_PHOTOS_FAILURE,
    payload: error,
  };
};

const fetchPhotos = () => (dispatch) => {
  dispatch(photosRequested());
  photosApiService
    .getAllPhotos()
    .then((data) => {
      dispatch(photosLoaded(data));
    })
    .catch((error) => {
      dispatch(photosError(error));
    });
};

const addPhotoRequested = () => {
  return {
    type: ADD_PHOTO_REQUEST,
  };
};

const addPhotoLoaded = (newData) => {
  return {
    type: ADD_PHOTO_SUCCESS,
    payload: newData,
  };
};

const addPhotoError = (error) => {
  return {
    type: ADD_PHOTO_FAILURE,
    payload: error,
  };
};

const addPhotos = (formData) => (dispatch) => {
  dispatch(addPhotoRequested());
  photosApiService
    .sendPhotos(formData)
    .then((data) => {
      dispatch(addPhotoLoaded(data));
    })
    .catch((error) => dispatch(addPhotoError(error)));
};

const removePhotoRequested = () => {
  return {
    type: REMOVE_PHOTO_REQUEST,
  };
};

const removePhotoRemoved = (data) => {
  return {
    type: REMOVE_PHOTO_SUCCESS,
    payload: data,
  };
};

const removePhotoError = (error) => {
  return {
    type: REMOVE_PHOTO_FAILURE,
    payload: error,
  };
};

const removePhoto = (id) => (dispatch) => {
  dispatch(removePhotoRequested());
  photosApiService
    .removePhoto(id)
    .then((data) => {
      dispatch(removePhotoRemoved(data));
    })
    .catch((error) => dispatch(removePhotoError(error)));
};

export { fetchPhotos, addPhotos, removePhoto };
