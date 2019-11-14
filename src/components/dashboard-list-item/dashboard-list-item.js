import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './dashboard-list-item.css';

const DashboardListItem = ({
  title = 'title',
  content = 'content',
  path = '',
}) => {
  return (
    <Link to={`/${path}`}>
      <li className="dashboard-list-item">
        <div className="title">{title}</div>
        <div className="content">{content}</div>
      </li>
    </Link>
  );
};

DashboardListItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default DashboardListItem;
