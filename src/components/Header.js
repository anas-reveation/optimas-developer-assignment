import React, { useState } from 'react';
import logoLogin from '../images/optimas logo.svg';
import Dashboard from '../images/header_1.svg';
import User from '../images/user (2).svg';
import Roles from '../images/roles.svg';
import Setting from '../images/setting (2).svg';
import Bell from '../images/bell_inner.svg';
import Icon from '../images/icon.svg';
import BellS from '../images/bell.gif';
import Arrow from '../images/solid_arrow.svg';

// Adjust the path accordingly
import '../App.css';
// Assuming Font Awesome for icons

import loginImg from '../images/scifi_1 1.svg';

function Header() {
  return (
    <div className='container-fluid '>
      <div className='d-flex justify-content-between '>
        <img src={logoLogin} alt='login page' className='height_55 m-3' />
        <div className='d-flex align-items-center flex-column'>
          <div className='d-flex top_bar align-items-center px-4 py-4'>
            <div className='border-end border-white '>
              <img
                src={Dashboard}
                alt='login page'
                className='height_44 mx-4'
              />
            </div>
            <div className='border-end border-white '>
              <img src={User} alt='login page' className='height_44 mx-4' />
            </div>
            <div className='border-end border-white '>
              <img src={Roles} alt='login page' className='height_44 mx-4' />
            </div>
            <div className=' '>
              <img src={Setting} alt='login page' className='height_44 mx-4' />
            </div>
          </div>
          <div className='arrow_bar border_bottom'>
            <img src={Arrow} alt='login page' className='height_10 mx-5' />
          </div>
        </div>

        <div className='row align-items-center'>
          <div className='col-6 gif'>
            <img src={BellS} alt='login page' className=' ' />
          </div>
          <div className='col-6'>
            <img src={Icon} alt='login page' className='h-100' />
            <img src={Bell} alt='login page' className='notification' />

            <div className='Bell_dot'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
