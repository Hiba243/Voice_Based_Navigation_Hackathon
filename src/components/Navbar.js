import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <header>
      <nav className="navbar">
        <p className="nav__logo">Voice Based Navigation App</p>
        <ul className="nav__menu" >
          <div className="link-flex">
            <li className="nav__item"  id="home_btn">
              <Link to='/' id="home" className="nav__link link-effect">Home</Link>
            </li>
          </div>
          <div className="link-flex">
            <li className="nav__item">
              <Link to='/usercreate' id="usercreate" className="nav__link link-effect">Create Users</Link>
            </li>
          </div>
          <div className="link-flex">
            <li className="nav__item">
              <Link to='/usersearch' id="usersearch" className="nav__link link-effect">Search Users</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;