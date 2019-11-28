import React from 'react';
import propTypes from 'prop-types';
import './tasks-preview-list-item.css';

const TasksPreviewListItem = ({ isCompleted, title }) => (
  <li className="tasks-preview-list-item">
    <p className="task-field-preview">{title}</p>
    <div className="task-status">
      <label
        htmlFor="task-preview-checkbox"
        className="task-status-label-preview"
      >
        <input
          type="checkbox"
          name="task-preview-checkbox"
          checked={isCompleted}
          disabled
        />
        <i className="icon-check" />
      </label>
    </div>
  </li>
);

TasksPreviewListItem.propTypes = {
  title: propTypes.string.isRequired,
  isCompleted: propTypes.bool.isRequired,
};

export default TasksPreviewListItem;
