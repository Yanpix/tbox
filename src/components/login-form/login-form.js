import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import propTypes from 'prop-types';
import { loginUser } from '../../actions';
import './login-form.css';
import Spinner from '../spinner';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
    };
  }

  componentDidUpdate() {
    const { isLoggedIn, history } = this.props;
    if (isLoggedIn) {
      history.push('/');
    }
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmitButton = (e) => {
    e.preventDefault();
    const { loginUser } = this.props;
    const { name, password } = this.state;
    loginUser(name, password);
  };

  render() {
    const { loading, error } = this.props;

    return (
      <>
        <form className="login-form" onSubmit={this.handleSubmitButton}>
          <div className="login-row">
            <div className="input-container">
              <input
                type="text"
                name="name"
                placeholder="Username"
                required
                onChange={this.handleInputChange}
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          {loading && <Spinner />}
          {error && <div className="login-error">{error}</div>}
          <div className="submit-container">
            <button className="submit-btn" type="submit">
              Login
            </button>
          </div>
        </form>
      </>
    );
  }
}

LoginForm.defaultProps = {
  error: null,
};

LoginForm.propTypes = {
  isLoggedIn: propTypes.bool.isRequired,
  history: propTypes.oneOfType([propTypes.object]).isRequired,
  loginUser: propTypes.func.isRequired,
  loading: propTypes.bool.isRequired,
  error: propTypes.objectOf(propTypes.any),
};

const mapStateToProps = (state) => {
  const { isLoggedIn, user, loading, error } = state.userReducer;
  return {
    isLoggedIn,
    user,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (name, password) => dispatch(loginUser(name, password)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginForm)
);
