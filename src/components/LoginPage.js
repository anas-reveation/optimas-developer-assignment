import React, { useState } from 'react';
import loginImg from '../images/scifi_1 1.svg';
import Earth from '../images/login_earth.gif';
import userIcon from '../images/user.svg';
import passIcon from '../images/key.svg';
import logoLogin from '../images/optimas logo.svg'; // Adjust the path accordingly
import '../App.css';
// Assuming Font Awesome for icons

function LoginPage({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // Replace with actual authentication logic
    const validUsername = 'admin'; // Replace with appropriate credentials
    const validPassword = 'password123'; // Replace with appropriate credentials

    if (username === validUsername && password === validPassword) {
      setErrorMessage('');
      onLoginSuccess(); // Trigger callback for successful login
    } else if (username === validUsername && password !== validPassword) {
      setErrorMessage('Invalid password');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className='container-fluid bg_main py-5'>
      <div className='row py-5 my-5 align-items-center'>
        <div className='col-12 col-xl-7'>
          <img src={Earth} alt='login page' className='w-75 blend_img' />
        </div>
        <div className='col-12 col-xl-4 '>
          <img src={logoLogin} alt='login page' className='w-50 mb-3' />

          <div className='login-card card py-3 px-5 card_body'>
            <h3 className='text-white fw-normal'>LOGIN</h3>

            <div className='card-body px-0'>
              <form onSubmit={handleLogin} className='form_input'>
                <div className='mb-3 input-group d-flex align-items-center p-2'>
                  <img src={userIcon} alt='login page' className='height_25' />
                  <input
                    type='text'
                    className={`form-control text-white border-${
                      errorMessage ? 'danger' : '0'
                    }`}
                    id='username'
                    placeholder='User Name'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                {errorMessage && errorMessage.includes('username') && (
                  <p className='error-message text-danger'>{errorMessage}</p>
                )}
                <div className='mb-3 input-group d-flex align-items-center p-2'>
                  <img src={passIcon} alt='login page' className='height_25' />
                  <input
                    type='password'
                    className={`form-control text-white border-${
                      errorMessage && errorMessage.includes('password')
                        ? 'danger'
                        : '0'
                    }`}
                    id='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {errorMessage && errorMessage.includes('password') && (
                  <p className='error-message text-danger'>{errorMessage}</p>
                )}
                <div className='d-flex justify-content-between pt-3'>
                  <a href='#' className='text-white'>
                    Forgot Password?
                  </a>
                  <button type='submit' className='btn btn_clr border-0'>
                    SIGN IN {/* Button text as per the image */}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
