import CategoryItemList from "./CategoryItemList";

function CategoryContainer() {
  const categories = [
    { id: 1, title: "Hats", imageUrl: "https://i.ibb.co/cvpntL1/hats.png" },
    { id: 2, title: "Jackets" },
    { id: 3, title: "Sneakers" },
    { id: 4, title: "Women" },
    { id: 5, title: "Men" },
  ];

  return (
    <div className="category">
      {categories.map((category) => (
        <CategoryItemList
          key={category.id}
          categoryName={category.title}
          id={category.id}
        />
      ))}
    </div>
  );
}

export default CategoryContainer;
