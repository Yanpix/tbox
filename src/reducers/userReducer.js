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
} from '../actions/action-types';

const initialState = {
  isRegistered: false,
  isLoggedIn: false,
  token: '',
  user: {
    _id: '',
    name: '',
    profile_picture: {
      url: '',
    },
  },
  loading: false,
  registerError: null,
  loginError: null,
  logoutError: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST: {
      return {
        ...state,
        loading: true,
        registerError: null,
      };
    }
    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        registerError: null,
        isRegistered: true,
      };
    }
    case REGISTER_USER_FAILURE: {
      return {
        ...state,
        loading: false,
        registerError: action.payload,
      };
    }

    case LOGIN_USER_REQUEST: {
      return {
        ...state,
        loading: true,
        loginError: null,
      };
    }
    case LOGIN_USER_SUCCESS: {
      const { token, user } = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        token,
        user,
        loading: false,
        loginError: null,
      };
    }
    case LOGIN_USER_FAILURE: {
      return {
        ...state,
        loading: false,
        loginError: action.payload,
      };
    }

    case LOGOUT_USER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOGOUT_USER_SUCCESS: {
      return {
        ...initialState,
        loading: false,
      };
    }
    case LOGOUT_USER_FAILURE: {
      return {
        ...state,
        loading: false,
        logoutError: action.payload,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
