import React, { Component } from 'react';
import propTypes from 'prop-types';
import './tasks-list-item.css';

class TasksListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: { title: '', isCompleted: false },
    };
  }

  componentDidMount() {
    const { task } = this.props;
    this.setState({
      task,
    });
  }

  handleTitleChange = (e) => {
    const { value } = e.target;
    const { task } = this.state;
    this.setState({ task: { ...task, title: value } });
  };

  handleTaskStatusChange = (e) => {
    const { checked } = e.target;
    const { sendItem } = this.props;
    const { task } = this.state;

    this.setState({ task: { ...task, isCompleted: checked } }, () => {
      const { task } = this.state;
      if (task._id) {
        sendItem(task);
      }
    });
  };

  render() {
    const {
      task: { title, isCompleted },
      task,
    } = this.state;
    const { sendItem, removeItem } = this.props;
    return (
      <li className="task-list-item">
        <form className="task-field" onSubmit={() => sendItem(task)}>
          <input
            type="text"
            defaultValue={title}
            onChange={this.handleTitleChange}
            onBlur={() => sendItem(task)}
          />
          <span
            role="button"
            tabIndex="0"
            className="delete-task"
            onClick={() => removeItem(task)}
          >
            <i className="icon-cross" />
          </span>
        </form>
        <div className="task-status">
          <label className="task-status-label">
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={this.handleTaskStatusChange}
            />
            <i className="icon-check" />
          </label>
        </div>
      </li>
    );
  }
}

TasksListItem.propTypes = {
  task: propTypes.oneOf([propTypes.object]).isRequired,
  sendItem: propTypes.func.isRequired,
  removeItem: propTypes.func.isRequired,
};

export default TasksListItem;
