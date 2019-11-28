import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { fetchTasks } from '../../actions';
import TasksPreviewListItem from '../tasks-preview-list-item';
import './tasks-preview.css';

class TasksPreview extends Component {
  componentDidMount() {
    const { token, fetchTasks } = this.props;
    fetchTasks(token);
  }

  render() {
    const { tasks, loading, error } = this.props;
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator error={error} />;
    }

    return (
      <ul className="tasks-preview-list">
        {tasks.map(({ title, isCompleted, _id }, i) =>
          i < 3 ? (
            <TasksPreviewListItem
              title={title}
              isCompleted={isCompleted}
              key={_id}
            />
          ) : null
        )}
      </ul>
    );
  }
}

TasksPreview.defaultProps = {
  error: null,
};

TasksPreview.propTypes = {
  fetchTasks: propTypes.func.isRequired,
  tasks: propTypes.arrayOf(propTypes.object).isRequired,
  token: propTypes.string.isRequired,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksPreview);
