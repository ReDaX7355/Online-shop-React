import React from 'react';

import FormLogin from './../components/FormLogin';

const LoginPage = () => {
  return (
    <div className="login-form">
      <div className="container">
        <h2 className="login__title">Вход</h2>
        <FormLogin />
      </div>
    </div>
  );
};

export default LoginPage;
