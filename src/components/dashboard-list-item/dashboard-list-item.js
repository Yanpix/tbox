import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './dashboard-list-item.css';

const DashboardListItem = ({ title = 'title', path = '', children }) => {
  const item = (
    <li className="dashboard-list-item">
      <div className="title">{title}</div>
      {children ? (
        <div className="content">{children}</div>
      ) : (
        <div className="content">content</div>
      )}
    </li>
  );

  return <>{path ? <Link to={path}>{item}</Link> : item}</>;
};

DashboardListItem.defaultProps = {
  path: '',
  children: null,
};

DashboardListItem.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string,
  children: PropTypes.node,
};

export default DashboardListItem;
