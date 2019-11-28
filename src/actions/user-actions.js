import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
} from './action-types';
import userApiService from '../services/userApiService';

const registerRequested = () => {
  return {
    type: REGISTER_USER_REQUEST,
  };
};

const registerSuccess = (userData) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: userData,
  };
};

const registersError = (error) => {
  return {
    type: REGISTER_USER_FAILURE,
    payload: error,
  };
};

const registerUser = (formData) => (dispatch) => {
  dispatch(registerRequested());
  userApiService
    .registerUser(formData)
    .then((data) => {
      dispatch(registerSuccess(data));
    })
    .catch((error) => {
      dispatch(registersError(error));
    });
};

const loginRequested = () => {
  return {
    type: LOGIN_USER_REQUEST,
  };
};

const loginSuccess = (userData) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: userData,
  };
};

const loginError = (error) => {
  return {
    type: LOGIN_USER_FAILURE,
    payload: error,
  };
};

const loginUser = (name, password) => (dispatch) => {
  dispatch(loginRequested());
  userApiService
    .loginUser(name, password)
    .then((userData) => {
      if (userData.auth) {
        dispatch(loginSuccess(userData));
      } else if (typeof userData === 'string') {
        dispatch(loginError(userData));
      } else {
        dispatch(loginError('Wrong e-mail or password'));
      }
    })
    .catch((error) => dispatch(loginError(error)));
};

const logoutRequested = () => {
  return {
    type: LOGOUT_USER_REQUEST,
  };
};

const logoutSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS,
  };
};

const logoutError = (error) => {
  return {
    type: LOGOUT_USER_FAILURE,
    payload: error,
  };
};

const logoutUser = (token) => (dispatch) => {
  dispatch(logoutRequested());
  userApiService
    .logoutUser(token)
    .then(() => {
      dispatch(logoutSuccess());
    })
    .catch((error) => dispatch(logoutError(error)));
};

export { registerUser, loginUser, logoutUser };
