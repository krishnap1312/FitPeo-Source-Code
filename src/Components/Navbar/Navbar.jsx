// src/components/Navbar/Navbar.jsx

import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='NavbarDiv'>
        <div className='NavbarDivs'>
            <div><img src={ process.env.PUBLIC_URL + "/Logo.png"} alt="Logo" /></div>
            <div className='search-container' style={{ position: 'relative' }}>
                <input type="text" placeholder="Search..." />
                <span className='bi bi-search'></span>
            </div>
        </div>
        <div className='NavbarRightDivs'>
            <div className='RightSideButtons'>
                <i className="bi bi-envelope text-white"></i>
            </div>
            <div className='RightSideButtons'>
                <i className="bi bi-gear-fill text-white"></i>
            </div>
            <div className='RightSideButtons'>
                <i className="bi bi-bell text-white"></i>
            </div>
            <div>
                <img className='ProfileImage' src={process.env.PUBLIC_URL + '/man.png'} alt="Profile" />
            </div>
        </div>
    </div>
  );
}

export default Navbar;
