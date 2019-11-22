import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';
import './dashboard-header.css';

class DashboardHeader extends Component {
  handleLogoutClick = () => {
    const { logoutUser } = this.props;
    logoutUser();
  };

  render() {
    const { user } = this.props;
    const { name, profile_picture: profilePicture } = user;

    const avatar = profilePicture ? (
      <img src={`http://localhost:3000${profilePicture.url}`} alt="avatar" />
    ) : (
      <img src="/images/avatar.jpg" alt="avatar" />
    );

    return (
      <div className="dashboard-header">
        <div className="dashboard-user">{avatar}</div>
        <h1>Good day {name}</h1>
        <div className="logout-container">
          <button type="button" onClick={this.handleLogoutClick}>
            Logout
          </button>
        </div>
      </div>
    );
  }
}

DashboardHeader.propTypes = {
  user: propTypes.oneOfType([propTypes.object]).isRequired,
  logoutUser: propTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { user, token } = state.userReducer;
  return {
    user,
    token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: (token) => dispatch(logoutUser(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHeader);
