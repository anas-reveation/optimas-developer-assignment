import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Table from '../components/Table';

import Defination from '../images/defination.svg';
import Stopwatch from '../images/tickcircle.svg';
import Plus from '../images/plus.svg';
import Close from '../images/x.svg';
import WaterMark from '../images/watermark.svg';

function UserTable() {
  const [showAddUserPopup, setShowAddUserPopup] = useState(false);
  const [isAddUserActive, setIsAddUserActive] = useState(false);

  const toggleAddUserPopup = () => {
    setShowAddUserPopup(!showAddUserPopup);
    setIsAddUserActive(!isAddUserActive); // Toggle the active state when the button is clicked
  };

  return (
    <div className='bg_main'>
      <Header />

      <div className='container '>
        <div className='d-flex flex-column pt-5 pb-3'>
          <h5 className='text-white'>Admin</h5>
          <div className='d-flex py-3'>
            <button type='submit' className={`btn user_btn  user_active`}>
              Users {/* Button text as per the image */}
            </button>
            <button type='submit' className='btn user_btn border-0 ms-3'>
              User Group {/* Button text as per the image */}
            </button>
          </div>
          <div className='d-flex justify-content-between text-white font_size_12'>
            <div className='d-flex '>
              <div className=''>
                <div className='d-flex  p-2 align-items-center bg_light'>
                  <img
                    src={Defination}
                    alt='login page'
                    className='height_25 me-2'
                  />
                  <p className='mb-0'>Definitions - 58</p>
                </div>
                <div className='define_bottom'></div>
              </div>
              <div className='d-flex p-2 align-items-center'>
                <img
                  src={Stopwatch}
                  alt='login page'
                  className='height_25 me-2'
                />
                <p className='mb-0'>Pending</p>
              </div>
            </div>
            <div className='position-relative'>
              <div
                className={`d-flex bg_light p-2 align-items-center width_300 ${
                  isAddUserActive ? 'user_active' : ''
                }`}
                onClick={toggleAddUserPopup}
                style={{ cursor: 'pointer' }}
              >
                <img src={Plus} alt='login page' className='height_25 mx-2 ' />
                <p className='mb-0 pe-5 me-4'>Add User</p>
              </div>
              {showAddUserPopup && (
                <div className='popup text-black'>
                  {/* Your popup content here */}
                  <div className='user_active p-3'>
                    <div className='d-flex justify-content-between align-items-center py-3'>
                      <h4 className='mb-0'>Enter Below Details</h4>
                      <img
                        src={Close}
                        alt='login page'
                        className='height_25 me-2'
                        onClick={toggleAddUserPopup}
                      />
                    </div>
                    <div className='pop_input d-flex flex-column px-2'>
                      <input type='text' placeholder='User Name' />
                      <input type='text' placeholder='User ID' />
                      <input type='email' placeholder='Email ID' />
                      <input type='tel' placeholder='Phone Number' />
                      <input type='text' placeholder='Designation' />
                    </div>
                    <div className='d-flex justify-content-between align-items-center px-2 py-3'>
                      <h5
                        className='fw-light mb-0'
                        onClick={toggleAddUserPopup}
                        style={{ cursor: 'pointer' }}
                      >
                        Cancel
                      </h5>
                      <button type='submit' className='save_btn'>
                        Save & Continue {/* Button text as per the image */}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <Table />
      </div>

      <Footer />
    </div>
  );
}

export default UserTable;
