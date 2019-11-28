import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
  REMOVE_TASK_REQUEST,
  REMOVE_TASK_SUCCESS,
  REMOVE_TASK_FAILURE,
  ADD_TASK_TEMPLATE,
} from './action-types';
import tasksApiService from '../services/tasksApiService';

const tasksRequested = () => {
  return {
    type: FETCH_TASKS_REQUEST,
  };
};

const tasksLoaded = (newData) => {
  return {
    type: FETCH_TASKS_SUCCESS,
    payload: newData,
  };
};

const tasksError = (error) => {
  return {
    type: FETCH_TASKS_FAILURE,
    payload: error,
  };
};

const fetchTasks = (token) => (dispatch) => {
  dispatch(tasksRequested());
  tasksApiService
    .getTasks(token)
    .then((data) => {
      dispatch(tasksLoaded(data));
    })
    .catch((error) => {
      dispatch(tasksError(error));
    });
};

const addTaskRequested = () => {
  return {
    type: ADD_TASK_REQUEST,
  };
};

const addTaskSuccess = (newData) => {
  return {
    type: ADD_TASK_SUCCESS,
    payload: newData,
  };
};

const addTaskError = (error) => {
  return {
    type: ADD_TASK_FAILURE,
    payload: error,
  };
};

const addTask = (token, task) => (dispatch) => {
  const { index } = task;
  dispatch(addTaskRequested());
  tasksApiService
    .addTask(token, task)
    .then((data) => {
      dispatch(addTaskSuccess({ ...data, index }));
    })
    .catch((error) => dispatch(addTaskError(error)));
};

const addTaskTemplate = () => {
  return {
    type: ADD_TASK_TEMPLATE,
  };
};

const updateTaskRequested = () => {
  return {
    type: UPDATE_TASK_REQUEST,
  };
};

const updateTaskSuccess = (newData) => {
  return {
    type: UPDATE_TASK_SUCCESS,
    payload: newData,
  };
};

const updateTaskError = (error) => {
  return {
    type: UPDATE_TASK_FAILURE,
    payload: error,
  };
};

const updateTask = (token, task) => (dispatch) => {
  const { index } = task;
  dispatch(updateTaskRequested());
  tasksApiService
    .updateTask(token, task)
    .then((data) => {
      dispatch(updateTaskSuccess({ ...data, index }));
    })
    .catch((error) => dispatch(updateTaskError(error)));
};

const removeTaskRequested = () => {
  return {
    type: REMOVE_TASK_REQUEST,
  };
};

const removeTaskSuccess = (newData) => {
  return {
    type: REMOVE_TASK_SUCCESS,
    payload: newData,
  };
};

const removeTaskError = (error) => {
  return {
    type: REMOVE_TASK_FAILURE,
    payload: error,
  };
};

const removeTask = (token, task) => (dispatch) => {
  const { index } = task;
  dispatch(removeTaskRequested());
  tasksApiService
    .removeTask(token, task)
    .then((data) => {
      dispatch(removeTaskSuccess({ ...data, index }));
    })
    .catch((error) => dispatch(removeTaskError(error)));
};

export { fetchTasks, addTask, addTaskTemplate, updateTask, removeTask };
