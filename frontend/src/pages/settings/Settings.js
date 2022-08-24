import './settings.css';
import Banner from '../../components/banner/Banner';
import SideBar from '../../components/sidebar/SideBar';

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://f8n-ipfs-production.imgix.net/QmbGkpDcXbo9SF4YPFnGw8wyU3fRddKzd2rqx8Ep3SqnGN/nft.png?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{' '}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: 'none' }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="name" name="name" />
          <label>Email</label>
          <input type="email" placeholder="email" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}
