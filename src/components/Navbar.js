import React from 'react';
import logo from '../logo.jpeg';
import { HiShoppingCart } from 'react-icons/hi';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-dark d-flex align-items-center ">
      <a className="navbar-brand text-white" href="#">
        <img 
        className='mx-2'
          src={logo}
          width="30" 
          height="30" 
        />
        Andrea Store
      </a>

      <div>
        <button className="btn btn-outline-light mx-2">
          <HiShoppingCart />
          <span className="badge bg-danger ms-1">0</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;