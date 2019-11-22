import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import PhotosListItem from '../../components/photos-list-item';
import PhotoUploader from '../../components/file-uploader';
import Spinner from '../../components/spinner';
import ErrorIndicator from '../../components/error-indicator';
import { fetchPhotos, addPhotos, removePhoto } from '../../actions';
import './photos.css';

class Photos extends Component {
  constructor(props) {
    super(props);
    this.fileInputRef = React.createRef();
  }

  componentDidMount() {
    const { token, photos, fetchPhotos } = this.props;

    if (!photos.length) {
      fetchPhotos(token);
    }
  }

  handleOnImageClick = (id) => {
    const { token, removePhoto } = this.props;
    removePhoto(token, id);
  };

  triggerInput = (e) => {
    e.persist();
    this.fileInputRef.current.click();
  };

  handleFileInputChange = (e) => {
    const { files } = e.target;
    const { token, addPhotos } = this.props;

    const formData = new FormData();
    [...files].forEach((image, i) => formData.append(`image_${i}`, image));

    addPhotos(token, formData);
  };

  render() {
    const { photos, loading, error } = this.props;

    return (
      <div className="photos-page">
        <h1>Photos</h1>
        {loading ? (
          <div className="spinner-fixed-center">
            <Spinner />
          </div>
        ) : (
          <ul className="photos-list">
            <PhotoUploader
              handleFileInputChange={this.handleFileInputChange}
              inputRef={this.fileInputRef}
              triggerInput={this.triggerInput}
            />
            {photos.map(({ url, _id }) => (
              <PhotosListItem
                src={url}
                key={_id}
                id={_id}
                handleOnImageClick={this.handleOnImageClick}
              />
            ))}
          </ul>
        )}
        {error && <ErrorIndicator />}
      </div>
    );
  }
}

Photos.defaultProps = {
  error: null,
};

Photos.propTypes = {
  token: propTypes.string.isRequired,
  photos: propTypes.arrayOf(propTypes.object).isRequired,
  fetchPhotos: propTypes.func.isRequired,
  addPhotos: propTypes.func.isRequired,
  removePhoto: propTypes.func.isRequired,
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
    addPhotos: (token, formData) => dispatch(addPhotos(token, formData)),
    removePhoto: (token, id) => dispatch(removePhoto(token, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
