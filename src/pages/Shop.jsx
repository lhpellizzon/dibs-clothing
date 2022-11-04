import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

function Shop() {
  return (
    <>
      <Helmet>
        <title>Categories | Dibs</title>
      </Helmet>
      <h1>shop</h1>
      <Outlet />
    </>
  );
}

export default Shop;
