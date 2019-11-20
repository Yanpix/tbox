import React from 'react';
import './news-list-item.css';
import propTypes from 'prop-types';

const NewsListItem = ({ title, content }) => {
  return (
    <li className="news-list-item">
      <h3 className="title">{title}</h3>
      <p className="content">{content}</p>
    </li>
  );
};

NewsListItem.propTypes = {
  title: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
};

export default NewsListItem;
