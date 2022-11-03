import { useNavigate } from "react-router-dom";

function CategoryItemList({ categoryName, id, imageUrl }) {
  const navigate = useNavigate();
  return (
    <div className="category-item">
      <div
        className="category-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      <a
        className="category-text"
        tabIndex="0"
        onKeyDown={(e) =>
          e.key === "Enter" && navigate(`/shop/${categoryName}`)
        }
        onClick={() => navigate(`/shop/${categoryName}`)}
      >
        <h2>{categoryName}</h2>
        <p>Shop Now</p>
      </a>
    </div>
  );
}

export default CategoryItemList;
