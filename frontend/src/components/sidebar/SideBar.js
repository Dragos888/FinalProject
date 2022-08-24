import React from 'react';
import './SideBar.css';

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImg"
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/aestheticocto-profile_image-1f11c96a417a2843-300x300.jpeg"
          alt="cartoon_bald_head_corporatis"
          srcset=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          laudantium nostrum perferendis repellendus ipsam harum, illum quam.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Classic Memes</li>
          <li className="sidebarListItem">Cringe Memes</li>
          <li className="sidebarListItem">Dank Memes</li>
          <li className="sidebarListItem">Edgy Memes</li>
          <li className="sidebarListItem">Original Memes</li>
          <li className="sidebarListItem">Forgotten Memes</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className=" sidebarIcon fa-brands fa-twitter"></i>
          <i className=" sidebarIcon fa-brands fa-square-facebook"></i>
          <i className=" sidebarIcon fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>
  );
}
