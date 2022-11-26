import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import ShopCategoriesContainer from "../components/ShopCategoriesContainer";
import { ProductContext } from "../context/ProductContext";
import ProductItemList from "../components/ProductItemList";

function Shop() {
  return (
    <>
      <Helmet>
        <title>Categories | Dibs</title>
      </Helmet>
      <ShopCategoriesContainer />
      <Outlet />
    </>
  );
}

export default Shop;
