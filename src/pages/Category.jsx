import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Category = () => {
  const { categoryName } = useParams();

  return (
    <>
      <Helmet>
        <title>{categoryName}</title>
      </Helmet>
      <div>Category {categoryName}</div>
    </>
  );
};

export default Category;
