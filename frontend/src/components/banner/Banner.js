import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
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
            <Link to={'/'}>HOME</Link>
          </li>
          <li className="topListItem">DANK</li>
          <li className="topListItem">LOG OUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImage"
          src="https://f8n-ipfs-production.imgix.net/QmbGkpDcXbo9SF4YPFnGw8wyU3fRddKzd2rqx8Ep3SqnGN/nft.png?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680"
          alt="troll face"
        />
        <i className=" searchIcon fa-brands fa-searchengin"></i>
      </div>
    </div>
  );
};

export default Banner;
