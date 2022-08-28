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
        <p>Some text for description indeed</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Culture</li>
          <li className="sidebarListItem">History</li>
          <li className="sidebarListItem">Tehnology</li>
          <li className="sidebarListItem">Science</li>
          <li className="sidebarListItem">Health</li>
          <li className="sidebarListItem">Commedy</li>
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
