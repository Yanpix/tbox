import React from 'react';
import './photos-preview-list-item.css';
import propTypes from 'prop-types';
import { BASE_URL } from '../../utils/constants';

const PhotosPreviewListItem = ({ url }) => {
  return (
    <li className="photos-preview-list-item">
      <img src={`${BASE_URL}${url}`} alt="preview" />
    </li>
  );
};

PhotosPreviewListItem.propTypes = {
  url: propTypes.string.isRequired,
};

export default PhotosPreviewListItem;
