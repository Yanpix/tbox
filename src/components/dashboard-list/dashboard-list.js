import React from 'react';
import DashboardListItem from '../dashboard-list-item';
import Weather from '../weather';
import Clothes from '../clothes';
import PhotosPreview from '../photos-preview';
import './dashboard-list.css';

const DashboardList = () => {
  const list = [
    <DashboardListItem title="Weather" key="weather">
      <Weather />
    </DashboardListItem>,
    <DashboardListItem key="two" />,
    <DashboardListItem key="three" />,
    <DashboardListItem title="Photos" key="photos" path="/photos">
      <PhotosPreview />
    </DashboardListItem>,
    <DashboardListItem
      title="Tasks"
      content="tasks"
      key="tasks"
      path="/tasks"
    />,
    <DashboardListItem title="Clothes" key="clothes">
      <Clothes />
    </DashboardListItem>,
  ];
  return <ul className="dashboard-list">{list}</ul>;
};

export default DashboardList;
