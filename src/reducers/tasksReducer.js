import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  ADD_TASK_TEMPLATE,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
  REMOVE_TASK_REQUEST,
  REMOVE_TASK_SUCCESS,
  REMOVE_TASK_FAILURE,
} from '../actions/action-types';

const initialState = {
  tasks: [],
  loading: true,
  error: null,
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS_REQUEST:
      return {
        tasks: [],
        loading: true,
        error: null,
      };
    case FETCH_TASKS_SUCCESS:
      return {
        tasks: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_TASKS_FAILURE:
      return {
        tasks: [],
        loading: false,
        error: action.payload,
      };

    case ADD_TASK_REQUEST:
      return {
        ...state,
        error: null,
      };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: [
          ...state.tasks.slice(0, action.payload.index),
          {
            ...action.payload,
          },
          ...state.tasks.slice(action.payload.index + 1),
        ],
      };
    case ADD_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_TASK_TEMPLATE: {
      const template = {
        title: '',
        index: state.tasks.length,
        isCompleted: false,
      };
      return {
        ...state,
        tasks: [...state.tasks, template],
      };
    }

    case UPDATE_TASK_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case UPDATE_TASK_SUCCESS: {
      return {
        ...state,
        loading: false,
        tasks: [
          ...state.tasks.slice(0, action.payload.index),
          {
            ...action.payload,
          },
          ...state.tasks.slice(action.payload.index + 1),
        ],
      };
    }
    case UPDATE_TASK_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    case REMOVE_TASK_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REMOVE_TASK_SUCCESS: {
      const newTaskList = [
        ...state.tasks.slice(0, action.payload.index),
        ...state.tasks.slice(action.payload.index + 1),
      ].map((task, index) => {
        return {
          ...task,
          index,
        };
      });

      return {
        ...state,
        loading: false,
        tasks: newTaskList,
      };
    }
    case REMOVE_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default tasksReducer;
