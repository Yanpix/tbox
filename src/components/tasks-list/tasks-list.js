/* eslint-disable react/no-array-index-key */
import React from 'react';
import TasksListItem from '../tasks-list-item';
import './tasks-list.css';

const test = [
  { text: 'one', isChecked: false },
  { text: 'two', isChecked: true },
];

const TasksList = () => {
  const list = test.map((task, i) => (
    <TasksListItem text={task.text} isChecked={task.isChecked} key={i} />
  ));
  return <ul>{list}</ul>;
};

export default TasksList;
