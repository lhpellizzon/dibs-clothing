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
      <section id={category.title}>
        <h1 className="text-center text-slate-900 text-3xl font-bold uppercase p-4">
          {category.title}
        </h1>
        <div className="container mx-auto pb-4">
          <hr className="border" />
        </div>
        <ProductItemList products={category.items} />
      </section>
    </>
  );
};

export default Category;
