import React, { useEffect, useState } from 'react';
import logo from '../assets/images/Logo.svg';
import totalCalculation from '../utilities/totalCalculation';
import shopFunction from '../utilities/shopFunction';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const { card } = shopFunction();
  const [open, setOpen] = useState(false);

  // const [newCard, setNewCard] = useState([]);
  // useEffect(() => {
  //   setNewCard(card);
  // }, []);

  // console.log(card);
  const total = totalCalculation(card);

  return (
    <div className='bg-primary w-full fixed top-0 z-50'>
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="flex-1">
          <a href='/' className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="flex-none">
          <ul className={`lg:text-white lg:flex gap-4 absolute ${open ? 'top-16' : '-top-72'} right-0 text-right bg-secondary lg:bg-primary p-4 text-black lg:static`}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
          </ul>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item">{total.quantity}</span>
              </div>
            </label>
            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">{total.quantity} Items Add</span>
                <span className="text-primary">Total: ${parseFloat(total.total.toFixed(2))}</span>
                <div className="card-actions">
                  <Link to='/viewcart' className="btn btn-primary btn-block">View cart</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://picsum.photos/500/300?random" />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
          <div onClick={() => setOpen(!open)} className='lg:hidden'>
            {
              open ? <FontAwesomeIcon className='text-4xl ml-4 text-white' icon={faXmark} /> : <FontAwesomeIcon className='text-2xl ml-4 text-white' icon={faBars} />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
