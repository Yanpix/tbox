import React from 'react';
import './photos-preview-list-item.css';
import propTypes from 'prop-types';

const PhotosPreviewListItem = ({ url }) => {
  return (
    <li className="photos-preview-list-item">
      <img src={`http://localhost:3000${url}`} alt="preview" />
    </li>
  );
};

PhotosPreviewListItem.propTypes = {
  url: propTypes.string.isRequired,
};

export default PhotosPreviewListItem;
