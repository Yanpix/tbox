import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import propTypes from 'prop-types';
import AvatarUploader from '../avatar-uploader';
import './register-form.css';
import { registerUser } from '../../actions';
import Spinner from '../spinner';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      picture: null,
      passwordsMismatch: false,
    };

    this.fileInputRef = React.createRef();
  }

  componentDidUpdate() {
    const { isRegistered, history } = this.props;
    if (isRegistered) {
      history.push('/login');
    }
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmitButton = (e) => {
    e.preventDefault();
    const { registerUser } = this.props;
    const { name, email, password, passwordConfirmation, picture } = this.state;

    if (password === passwordConfirmation) {
      this.setState({
        passwordsMismatch: false,
      });

      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('picture', picture);
      registerUser(formData);
    } else {
      this.setState({
        passwordsMismatch: true,
      });
    }
  };

  triggerFileInput = (e) => {
    e.persist();
    this.fileInputRef.current.click();
  };

  handleFileInputChange = (e) => {
    const { files } = e.target;

    this.setState({
      picture: files[0],
    });
  };

  render() {
    const { loading, error } = this.props;
    const { passwordsMismatch, picture } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmitButton} className="login-form">
          <div className="login-row">
            <div className="input-container">
              <input
                type="text"
                placeholder="Username"
                name="name"
                required
                onChange={this.handleInputChange}
              />
            </div>
            <div className="input-container">
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="login-row">
            <div className="input-container">
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
                onChange={this.handleInputChange}
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                placeholder="Confirm password"
                name="passwordConfirmation"
                required
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <AvatarUploader
            handleFileInputChange={this.handleFileInputChange}
            inputRef={this.fileInputRef}
            triggerInput={this.triggerFileInput}
            picture={picture}
          />
          {loading && <Spinner />}
          {error && <div className="login-error">{error}</div>}
          {passwordsMismatch && (
            <div className="login-error">Passwords not match</div>
          )}
          <div className="submit-container">
            <button className="submit-btn" type="submit">
              Register
            </button>
          </div>
        </form>
      </>
    );
  }
}

RegisterForm.defaultProps = {
  error: null,
};

RegisterForm.propTypes = {
  isRegistered: propTypes.bool.isRequired,
  history: propTypes.oneOfType([propTypes.object]).isRequired,
  registerUser: propTypes.func.isRequired,
  loading: propTypes.bool.isRequired,
  error: propTypes.objectOf(propTypes.any),
};

const mapStateToProps = (state) => {
  const { isRegistered, user, loading, registerError } = state.userReducer;
  return {
    isRegistered,
    user,
    loading,
    error: registerError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (userData) => dispatch(registerUser(userData)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
);
