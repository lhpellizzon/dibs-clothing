import { useNavigate } from "react-router-dom";

function CategoryItemList({ categoryName, id, imageUrl }) {
  const navigate = useNavigate();
  return (
    <div className="category-item">
      <div
        className="category-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      <div
        className="category-text"
        onClick={() => navigate(`/category/${categoryName}`)}
      >
        <h2>{categoryName}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default CategoryItemList;
