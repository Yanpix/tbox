import React from 'react';
import TasksList from '../../components/tasks-list';
import './tasks.css';

const Tasks = () => (
  <>
    <h1 className="header-tasks">Tasks</h1>
    <TasksList />
  </>
);

export default Tasks;
