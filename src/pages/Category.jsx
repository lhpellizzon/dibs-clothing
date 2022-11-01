import { useParams } from "react-router-dom";

function Category() {
  const { categoryName } = useParams();
  return <div>Category {categoryName}</div>;
}

export default Category;
