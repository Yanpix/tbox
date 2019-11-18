import React from 'react';
import DashboardList from '../../components/dashboard-list';
import './dashboard.css';

const Dashboard = () => (
  <>
    <div className="dashboard-header">
      <div className="dashboard-user">
        <img src="/images/avatar.jpg" alt="avatar" />
      </div>
      <h1>Good day username</h1>
    </div>
    <div className="dashboard-content">
      <DashboardList />
    </div>
  </>
);

export default Dashboard;
