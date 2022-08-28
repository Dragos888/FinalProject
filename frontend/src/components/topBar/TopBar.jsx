import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './topbar.css';
export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const ST = 'http://localhost:3500/images/';
  const handleLogout = (e) => {
    dispatch({ type: 'LOGOUT' });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className=" topIcon fa-brands fa-square-facebook"></i>
        <i className=" topIcon fa-brands fa-square-twitter"></i>
        <i className=" topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && 'LOGOUT'}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={ST + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
              <hr />
              <hr />
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
