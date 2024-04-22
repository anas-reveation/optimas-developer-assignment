import React, { useState } from 'react';
import footer_1 from '../images/footer_1.gif';
import footer_2 from '../images/footer_2.gif';
import footer_3 from '../images/footer_3.svg';
import footer_4 from '../images/footer_4.gif';
import footer_i_3 from '../images/footer_i_3.svg';
import ADMIN from '../images/ADMIN.svg';

// Adjust the path accordingly
import '../App.css';
// Assuming Font Awesome for icons

import loginImg from '../images/scifi_1 1.svg';

function Footer() {
  return (
    <div className='container-fluid pt-5 mt-3 pb-2'>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='position-relative'>
          <img src={footer_1} alt='login page' className='gif_image' />
          <img src={footer_i_3} alt='login page' className='set_position' />
        </div>
        <div className='d-flex'>
          <div className='position-relative'>
            <img src={footer_2} alt='login page' className='gif_image_1' />
            <img src={ADMIN} alt='login page' className='set_position_1' />
          </div>
          <div className=''>
            <img src={footer_3} alt='login page' className='' />
          </div>
        </div>
        <div className='position-relative'>
          <img src={footer_4} alt='login page' className='gif_image' />
        </div>
      </div>
    </div>
  );
}

export default Footer;
