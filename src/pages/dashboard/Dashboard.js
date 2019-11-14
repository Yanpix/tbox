import React, { Component } from 'react';
import DashboardList from '../../components/dashboard-list';
import './dashboard.css';

class Dashboard extends Component {
  render() {
    return (
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
  }
}

export default Dashboard;
