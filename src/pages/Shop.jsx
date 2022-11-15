import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ProductContext } from "../context/ProductContext";
import ProductItemList from "../components/ProductItemList";

function Shop() {
  return (
    <>
      <Helmet>
        <title>Categories | Dibs</title>
      </Helmet>
      <ProductItemList />
      <Outlet />
    </>
  );
}

export default Shop;
