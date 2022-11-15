import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductItem from "./ProductItem";

const ProductItemList = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="productList-container">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductItemList;
