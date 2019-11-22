import React from 'react';
import './avatar-uploader.css';
import propTypes from 'prop-types';

const AvatarUploader = ({
  triggerInput,
  inputRef,
  handleFileInputChange,
  picture,
}) => {
  return (
    <div
      onClick={triggerInput}
      className="avatar-uploader-container"
      role="button"
      tabIndex="0"
    >
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleFileInputChange}
      />
      <div className="picture-container">
        {picture ? (
          <img src={URL.createObjectURL(picture)} alt="" />
        ) : (
          'Add picture'
        )}
      </div>
    </div>
  );
};

AvatarUploader.defaultProps = {
  picture: null,
};

AvatarUploader.propTypes = {
  inputRef: propTypes.objectOf(propTypes.any).isRequired,
  triggerInput: propTypes.func.isRequired,
  handleFileInputChange: propTypes.func.isRequired,
  picture: propTypes.oneOfType([propTypes.object]),
};

export default AvatarUploader;
