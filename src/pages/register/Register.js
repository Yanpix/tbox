import React from 'react';
import { withRouter } from 'react-router-dom';
import './register.css';
import RegisterForm from '../../components/register-form';

const Register = () => (
  <div className="login-page">
    <h1>Dev Challenge</h1>
    <RegisterForm />
  </div>
);

export default withRouter(Register);
