import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="nav-container">
        <div className="nav-log">
          <Link to="/">
            <img src="" alt="" />
          </Link>
        </div>

        <div className="nav-links">
          <ul>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Sign In</Link>
            </li>
            <li>
              <Link to="/checkout">
                <img src="" alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Header;
