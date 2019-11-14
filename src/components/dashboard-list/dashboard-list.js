import React from 'react';
import DashboardListItem from '../dashboard-list-item';
import Weather from '../weather';
import './dashboard-list.css';

const DashboardList = () => {
  const list = [
    <DashboardListItem title="Weather" key="weather">
      <Weather />
    </DashboardListItem>,
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
