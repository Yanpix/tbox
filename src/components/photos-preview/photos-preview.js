import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { fetchPhotos } from '../../actions';
import PhotosPreviewListItem from '../photos-preview-list-item';
import './photos-preview.css';

class PhotosPreview extends Component {
  componentDidMount() {
    const { token, fetchPhotos } = this.props;
    fetchPhotos(token);
  }

  render() {
    const { photos, loading, error } = this.props;
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator error={error} />;
    }

    return (
      <ul className="photos-preview-list">
        {photos.map(({ url, _id }, i) =>
          i < 4 ? <PhotosPreviewListItem url={url} key={_id} /> : null
        )}
      </ul>
    );
  }
}

PhotosPreview.defaultProps = {
  error: null,
};

PhotosPreview.propTypes = {
  token: propTypes.string.isRequired,
  photos: propTypes.arrayOf(propTypes.object).isRequired,
  fetchPhotos: propTypes.func.isRequired,
  loading: propTypes.bool.isRequired,
  error: propTypes.objectOf(propTypes.any),
};

const mapStateToProps = (state) => {
  const { photos, loading, error } = state.photosReducer;
  const { token } = state.userReducer;
  return {
    token,
    photos,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhotos: (token) => dispatch(fetchPhotos(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotosPreview);
