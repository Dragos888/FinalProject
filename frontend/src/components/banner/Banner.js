import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  const user = false;
  return (
    <div className="banner">
      <div className="topLeft">
        <i className=" mediaIcon fa-brands fa-twitter"></i>
        <i className=" mediaIcon fa-brands fa-square-facebook"></i>
        <i className=" mediaIcon fa-brands fa-youtube"></i>
      </div>
      <div className="topCenter">
        <ul className="topCenterList">
          <li className="topListItem">
            <Link to={'/'} className="link ">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to={'/write'} className="link">
              {' '}
              DANK
            </Link>
          </li>
          <li className="topListItem">{user && 'LOG OUT'}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImage"
            src="https://f8n-ipfs-production.imgix.net/QmbGkpDcXbo9SF4YPFnGw8wyU3fRddKzd2rqx8Ep3SqnGN/nft.png?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680"
            alt="troll face"
          />
        ) : (
          <ul className="topCenterList">
            <li className="topListItem">
              <Link to={'/login'} className="link">
                LOG IN
              </Link>
            </li>
            <li className="topListItem">
              <Link to={'/register'} className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className=" searchIcon fa-brands fa-searchengin"></i>
      </div>
    </div>
  );
};

export default Banner;
