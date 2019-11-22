import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import LoginForm from '../../components/login-form';
import './login.css';

const Login = () => (
  <div className="login-page">
    <h1>Dev Challenge</h1>
    <LoginForm />
    <div className="login-info">
      New to the challenge?{' '}
      <Link to="/register" className="link">
        Sign up
      </Link>
    </div>
  </div>
);

export default withRouter(Login);
