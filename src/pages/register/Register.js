import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './register.css';
import RegisterForm from '../../components/register-form';

class Register extends Component {
  componentDidMount() {
    // setTimeout(() => this.props.history.push('/photos'), 3000);
  }

  handleClick = () => {};

  render() {
    return (
      <div className="login-page">
        <h1>Dev Challenge</h1>
        <RegisterForm />
      </div>
    );
  }
}

export default withRouter(Register);
