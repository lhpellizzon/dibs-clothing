function CategoryItemList({ categoryName, id, imageUrl }) {
  console.log(imageUrl);
  return (
    <div className="category-item">
      <div
        className="category-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      <div className="category-text z-10">
        <h2>{categoryName}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default CategoryItemList;
