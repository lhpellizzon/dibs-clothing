import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import SHOP_DATA from "../shop-data.json";

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
