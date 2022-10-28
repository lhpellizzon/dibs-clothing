import CategoryItemList from "./CategoryItemList";

function CategoryContainer() {
  const categories = [
    { id: 1, title: "Hats" },
    { id: 1, title: "Jackets" },
    { id: 1, title: "Sneakers" },
    { id: 1, title: "Women" },
    { id: 1, title: "Men" },
  ];

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItemList key={category.id} categoryName={category.title} />
      ))}
    </div>
  );
}

export default CategoryContainer;
