import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header className='bg-light'>
      <div className='container text-center bg-light d-flex justify-content-center flex-column vh-100'>
        <h1 className='mb-4'>Welcome to Our Website</h1>
        <p className='lead mb-4'>
          At Assignment 1, we believe in empowering individuals to reach new heights and accomplish their aspirations. Our platform is dedicated to offering you the finest services and curated content to guide you on your journey to success.
        </p>
        <p className='mb-4'>
          Whether you're aiming to enhance your skills, connect with like-minded individuals, or explore new horizons, we've got you covered. Our community thrives on collaboration, learning, and growth.
        </p>
        <div>
          <Link to='/signup'>
            <a className='btn btn-primary' role='button'>
              Join Now
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
