import React, { Component } from 'react';
import TasksList from '../../components/tasks-list';
import './tasks.css';

class Tasks extends Component {
  render() {
    return (
      <>
        <h1 className="header-tasks">Tasks</h1>
        <TasksList />
      </>
    );
  }
}

export default Tasks;
