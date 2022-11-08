import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ProductContext } from "../context/ProductContext";
import ProductItemList from "../components/ProductItemList";

function Shop() {
  const { products } = useContext(ProductContext);

  return (
    <>
      <Helmet>
        <title>Categories | Dibs</title>
      </Helmet>
      <div className="productList-container">
        {products.map((product) => (
          <ProductItemList key={product.id} product={product} />
        ))}
        <Outlet />
      </div>
    </>
  );
}

export default Shop;
