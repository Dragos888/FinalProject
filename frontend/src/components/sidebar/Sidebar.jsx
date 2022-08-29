import './sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle"> ABOUT ME</span>
        <img
          src="https://googlechrome.github.io/samples/picture-element/images/kitten-small.png"
          alt=""
        />
        <p>purr.purrr..purrr</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">RULES</span>
        <ul className="sidebarList">
          <p className="sidebarListItem">
            Take a step back, relax and enjoy the articles on this page. Be
            creative ... Be unique ...
          </p>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <i className=" sidebarIcon fa-brands fa-square-facebook"></i>
          <i className=" sidebarIcon fa-brands fa-square-twitter"></i>
          <i className=" sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}
