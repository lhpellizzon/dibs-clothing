import { Outlet, Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import Crown from "../assets/imgs/crown.svg";
function Header() {
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
              <Link to="/login">Sign In</Link>
            </li>
            <li>
              <Link to="/checkout">
                <div className="relative">
                  <BsBag className="text-3xl" />
                  <p
                    className="absolute text-sm font-bold"
                    style={{ left: "11px", top: "8px" }}
                  >
                    1
                  </p>
                </div>
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
