import React from 'react';
import DashboardListItem from '../dashboard-list-item';
import './dashboard-list.css';

const DashboardList = () => {
  const list = [
    <DashboardListItem key="one" />,
    <DashboardListItem key="two" />,
    <DashboardListItem key="three" />,
    <DashboardListItem key="four" />,
    <DashboardListItem
      title="Tasks"
      content="tasks"
      path="tasks"
      key="tasks"
    />,
    <DashboardListItem key="six" />,
  ];
  return <ul className="dashboard-list">{list}</ul>;
};

export default DashboardList;
