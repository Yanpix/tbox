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
    const { fetchPhotos } = this.props;
    fetchPhotos();
  }

  render() {
    const { photos, loading, error } = this.props;
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
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
  photos: propTypes.arrayOf(propTypes.object).isRequired,
  fetchPhotos: propTypes.func.isRequired,
  loading: propTypes.bool.isRequired,
  error: propTypes.objectOf(propTypes.any),
};

const mapStateToProps = (state) => {
  const { photos, loading, error } = state.photosReducer;
  return {
    photos,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotosPreview);
