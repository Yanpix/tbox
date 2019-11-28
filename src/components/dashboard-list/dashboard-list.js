import React from 'react';
import DashboardListItem from '../dashboard-list-item';
import Weather from '../weather';
import Clothes from '../clothes';
import PhotosPreview from '../photos-preview';
import NewsPreview from '../news-preview';
import SportPreview from '../sport-preview';
import TasksPreview from '../tasks-preview';
import './dashboard-list.css';

const DashboardList = () => {
  const list = [
    <DashboardListItem title="Weather" key="weather">
      <Weather />
    </DashboardListItem>,
    <DashboardListItem title="News" key="news" path="/news">
      <NewsPreview />
    </DashboardListItem>,
    <DashboardListItem title="Sport" key="sport" path="/sport">
      <SportPreview />
    </DashboardListItem>,
    <DashboardListItem title="Photos" key="photos" path="/photos">
      <PhotosPreview />
    </DashboardListItem>,
    <DashboardListItem title="Tasks" key="tasks" path="/tasks">
      <TasksPreview />
    </DashboardListItem>,
    <DashboardListItem title="Clothes" key="clothes">
      <Clothes />
    </DashboardListItem>,
  ];
  return <ul className="dashboard-list">{list}</ul>;
};

export default DashboardList;
