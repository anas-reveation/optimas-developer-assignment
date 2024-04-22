// Table.js

import React, { useState, useEffect } from 'react';
import '../App.css';
import Drop from '../images/drop.svg';
import Search from '../images/search.svg';
import Filter from '../images/filter.svg';
import WaterMark from '../images/watermark.svg';

function Table() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from JSONPlaceholder or your custom JSON endpoint
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <div className='table-container '>
        <img src={WaterMark} alt='login page' className='water_mark' />

        <table className='z-2'>
          <thead>
            <tr>
              <th></th>

              <th>
                <div className='d-flex justify-content-between align-items-center'>
                  <p className='mb-0'>User ID</p>
                  <div>
                    <img src={Drop} alt='login page' className='me-3' />
                    <img src={Filter} alt='login page' className='' />
                  </div>
                </div>
              </th>
              <th>
                <div className='d-flex justify-content-between align-items-center'>
                  <p className='mb-0'>User Name</p>
                  <div>
                    <img src={Drop} alt='login page' className='me-3' />
                    <img src={Filter} alt='login page' className='' />
                  </div>
                </div>
              </th>
              <th>
                {' '}
                <div className='d-flex justify-content-between align-items-center'>
                  <p className='mb-0'>Email ID</p>
                  <div>
                    <img src={Drop} alt='login page' className='me-3' />
                    <img src={Filter} alt='login page' className='' />
                  </div>
                </div>
              </th>
              <th>
                <div className='d-flex justify-content-between align-items-center'>
                  <p className='mb-0'>Phone Number</p>
                  <div>
                    <img src={Drop} alt='login page' className='me-3' />
                    <img src={Filter} alt='login page' className='' />
                  </div>
                </div>
              </th>
              <th>
                <div className='d-flex justify-content-between align-items-center'>
                  <p className='mb-0'>Projects</p>
                  <div>
                    <img src={Drop} alt='login page' className='me-3' />
                    <img src={Filter} alt='login page' className='' />
                  </div>
                </div>
              </th>
              <th>
                <div className='d-flex justify-content-between align-items-center'>
                  <p className='mb-0'>Designation</p>
                  <div>
                    <img src={Drop} alt='login page' className='me-3' />
                    <img src={Filter} alt='login page' className='' />
                  </div>
                </div>
              </th>
              <th>
                <div className='d-flex justify-content-between align-items-center'>
                  <p className='mb-0'>Action</p>
                  <div>
                    <img src={Drop} alt='login page' className='me-3' />
                    <img src={Filter} alt='login page' className='' />
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className='bg_light'></div>
              </td>
              {Array.from({ length: 7 }).map((_, index) => (
                <td key={index} className=''>
                  <div className='d-flex bg_light p-2'>
                    <img src={Search} alt='login page' className='' />
                    <input className='bg-transparent border-0 search_input text-white'></input>
                  </div>
                </td>
              ))}
            </tr>

            {users.map((user) => (
              <tr key={user.id} className='my-2 table_hover'>
                <td>
                  <img src={Drop} alt='login page' className='' />
                </td>
                <td>Emp-{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>{' '}
                {/* Assuming phone number is available in user object */}
                <td>01</td>{' '}
                {/* Assuming projects information is available in user object */}
                <td>Asst. Manager</td>{' '}
                {/* Assuming designation information is available in user object */}
                <td>{/* Action buttons or links can be added here */}View</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
