import React from 'react';
import DashboardList from '../../components/dashboard-list';
import './dashboard.css';
import DashboardHeader from '../../components/dashboard-header';

const Dashboard = () => (
  <>
    <DashboardHeader />
    <div className="dashboard-content">
      <DashboardList />
    </div>
  </>
);

export default Dashboard;
