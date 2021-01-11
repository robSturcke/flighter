import React from 'react';
import Login from '../components/auth/login';

const LoginRegister = () => {
  return (
    <div className="login_bg">
      <div className="container-fluid">
        <div className="row">
          <div className="mr-auto ml-auto mt-3 col-md-4">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
