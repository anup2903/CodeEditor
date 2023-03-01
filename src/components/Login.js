import React from 'react';

const Login = () => {
  return (
    <div className="login1">
      <div className="sign">
        <h1 className="logh">Login / Signup</h1>
        <h3 className="signtext">Sign in with email or mobile</h3>
        <label  >
            <input type="email" className='write' placeholder='Enter Email'/>
        </label>
        <button className='otp'>Send OTP</button>
      </div>
      
    </div>
  );
}

export default Login