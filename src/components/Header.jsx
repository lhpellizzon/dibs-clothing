import { useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../context/GlobalState";
import Crown from "../assets/imgs/crown.svg";
import { signOutUser } from "../utils/firebase/firebase.utils";
import Cart from "./Cart";
function Header() {
  const { currentUser } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img src={Crown} alt="" />
          </Link>
        </div>
        {/* Desktop menu */}
        <div className="hidden sm:block">
          <ul className="nav-links">
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              {currentUser ? (
                <Link to="/login" onClick={signOutUser}>
                  Sign Out
                </Link>
              ) : (
                <Link to="/login">Sign In</Link>
              )}
            </li>
            <li>
              <Cart />
            </li>
          </ul>
        </div>
        {/* Button */}
        <button
          id="menu-btn"
          className={`${isOpen ? "open" : ""} block hamburger focus:outline-none`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-mid"></span>
          <span className="hamburger-bot"></span>
        </button>

        {/* Mobile menu */}
        <div className="hidden">
          <ul className="nav-links">
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              {currentUser ? (
                <Link to="/login" onClick={signOutUser}>
                  Sign Out
                </Link>
              ) : (
                <Link to="/login">Sign In</Link>
              )}
            </li>
            <li>
              <Cart />
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Header;
