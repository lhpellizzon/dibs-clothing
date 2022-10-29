function CategoryItemList({ categoryName, id }) {
  return (
    <div className="category-item">
      <div className="category-image bg-[url('https://anyimage.io/images/error/404.png')]"></div>
      <div className="category-text z-10">
        <h2>{categoryName}</h2>
        <p>Show Now</p>
      </div>
    </div>
  );
}

export default CategoryItemList;
