import React from 'react';
import propTypes from 'prop-types';
import './sport-list-item.css';

const SportListItem = ({ teamName }) => {
  return <li className="sport-list-item">{teamName}</li>;
};

SportListItem.propTypes = {
  teamName: propTypes.string.isRequired,
};

export default SportListItem;
