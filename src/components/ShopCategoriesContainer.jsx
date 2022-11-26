import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ShopCategoryList from "./ShopCategoryList";

const ShopCategoriesContainer = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="container mx-auto">
      {products.map((item) => (
        <ShopCategoryList categoryItems={item} />
      ))}
    </div>
  );
};

export default ShopCategoriesContainer;
