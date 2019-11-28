import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import {
  fetchTasks,
  addTask,
  addTaskTemplate,
  updateTask,
  removeTask,
} from '../../actions';
import TasksListItem from '../../components/tasks-list-item';
import Spinner from '../../components/spinner';
import ErrorIndicator from '../../components/error-indicator';
import './tasks.css';

class Tasks extends Component {
  sendItem = (task) => {
    const { token, addTask, updateTask } = this.props;
    if (task._id) {
      updateTask(token, task);
    } else {
      addTask(token, task);
    }
  };

  removeItem = (task) => {
    const { token, removeTask } = this.props;
    removeTask(token, task);
  };

  render() {
    const { tasks, loading, error, addTaskTemplate } = this.props;

    return (
      <div className="tasks-page">
        <h1 className="header-tasks">Tasks</h1>
        {loading ? (
          <div className="spinner-fixed-center">
            <Spinner />
          </div>
        ) : (
          <ul className="tasks-list">
            {tasks.map(({ title, isCompleted, _id }, index) => (
              <TasksListItem
                task={{ title, isCompleted, _id, index }}
                key={_id}
                sendItem={this.sendItem}
                removeItem={this.removeItem}
              />
            ))}
            <button
              type="button"
              className="add-task-list-item"
              onClick={addTaskTemplate}
            >
              <i className="icon-plus" />
            </button>
          </ul>
        )}
        {error && <ErrorIndicator error={error} />}
      </div>
    );
  }
}

Tasks.defaultProps = {
  error: null,
};

Tasks.propTypes = {
  tasks: propTypes.arrayOf(propTypes.object).isRequired,
  token: propTypes.string.isRequired,
  addTask: propTypes.func.isRequired,
  addTaskTemplate: propTypes.func.isRequired,
  updateTask: propTypes.func.isRequired,
  removeTask: propTypes.func.isRequired,
  loading: propTypes.bool.isRequired,
  error: propTypes.objectOf(propTypes.any),
};

const mapStateToProps = (state) => {
  const { tasks, loading, error } = state.tasksReducer;
  const { token } = state.userReducer;
  return {
    token,
    tasks,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTasks: (token) => dispatch(fetchTasks(token)),
    addTask: (token, task) => dispatch(addTask(token, task)),
    addTaskTemplate: () => dispatch(addTaskTemplate()),
    updateTask: (token, task) => dispatch(updateTask(token, task)),
    removeTask: (token, task) => dispatch(removeTask(token, task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
