function CategoryItemList({ categoryName }) {
  return (
    <div className="category-container">
      {/* img */}
      <div className="category-body">
        <h2>{categoryName}</h2>
        <p>Show Now</p>
      </div>
    </div>
  );
}

export default CategoryItemList;
