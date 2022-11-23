import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import ProductItemList from "../components/ProductItemList";

const Category = () => {
  const { categoryName } = useParams();
  const { products } = useContext(ProductContext);
  const category = products.filter((category) => category.title === categoryName)[0];
  return (
    <>
      <Helmet>
        <title>{categoryName}</title>
      </Helmet>
      <h1>{category.title}</h1>
      <ProductItemList products={category.items} />
    </>
  );
};

export default Category;
