import { useContext, useState, useRef, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../context/GlobalState";
import Crown from "../assets/imgs/crown.svg";
import { signOutUser } from "../utils/firebase/firebase.utils";
import Cart from "./Cart";
import { motion } from "framer-motion";

function Header() {
  const { currentUser } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", closeDropDown, { capture: true });

    return () => document.removeEventListener("click", closeDropDown, { capture: true });
  }, []);

  return (
    <>
      <nav className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img src={Crown} alt="" />
          </Link>
        </div>
        <div className="flex gap-5">
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
            </ul>
          </div>

          {/* Button */}
          <div ref={menuRef} className="relative flex gap-4 items-center sm:hidden ">
            <button
              id="menu-btn"
              className={`${isMenuOpen ? "open" : ""} block hamburger px-3 py-3`}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-mid"></span>
              <span className="hamburger-bot"></span>
            </button>
            {/* Mobile menu */}
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="menu-mobile absolute top-10 right-0 bg-white border-black border-[1px] rounded py-2 z-30"
              >
                <ul className="flex flex-col space-y-4 py-2 text-center">
                  <li className="border-b-black border-b-[1px] px-4 pb-3 uppercase">
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li className="border-b-black border-b-[1px] px-4 pb-4 uppercase">
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li className="px-4 uppercase">
                    {currentUser ? (
                      <Link to="/login" onClick={signOutUser}>
                        Sign Out
                      </Link>
                    ) : (
                      <Link to="/login">Sign In</Link>
                    )}
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
          <Cart />
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Header;
