import React from 'react';
import './tasks-list-item.css';

const TasksListItem = ({ text, isChecked }) => {
  return (
    <li>
      <input type="text" value={text} />
      <input type="checkbox" defaultChecked={isChecked} />
    </li>
  );
};

export default TasksListItem;
