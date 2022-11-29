import { Outlet, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import ShopCategoriesContainer from "../components/ShopCategoriesContainer";

function Shop() {
  const { categoryName } = useParams();

  return (
    <>
      <Helmet>
        <title>Categories | Dibs</title>
      </Helmet>
      {!categoryName ? <ShopCategoriesContainer /> : <Outlet />}
    </>
  );
}

export default Shop;
