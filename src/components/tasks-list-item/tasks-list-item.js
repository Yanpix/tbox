import React from 'react';
import propTypes from 'prop-types';
import './tasks-list-item.css';

const TasksListItem = ({ text, isChecked }) => {
  return (
    <li>
      <input type="text" value={text} />
      <input type="checkbox" defaultChecked={isChecked} />
    </li>
  );
};

TasksListItem.propTypes = {
  text: propTypes.string.isRequired,
  isChecked: propTypes.bool.isRequired,
};

export default TasksListItem;
