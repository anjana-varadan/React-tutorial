
import {LogoURL} from '../utils/constants'
const Header = () => {
    return (
      <div className="header">
        <div className="logo">
          <img src={LogoURL}></img>
        </div>
        <div className="header-links">
          <ul>
            <li>Home</li>
            <li>Help</li>
            <li>Login</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;