import { Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="nav-container">
        <div className="bg-red-500">
          <h1 className="">Hello </h1>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Header;
