import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../context/GlobalState";
import Crown from "../assets/imgs/crown.svg";
import { signOutUser } from "../utils/firebase/firebase.utils";
import Cart from "./Cart";
function Header() {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <nav className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img src={Crown} alt="" />
          </Link>
        </div>

        <div>
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
