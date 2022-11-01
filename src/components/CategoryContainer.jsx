import CategoryItemList from "./CategoryItemList";

function CategoryContainer() {
  const categories = [
    { id: 1, title: "Hats", imageUrl: "https://i.ibb.co/cvpntL1/hats.png" },
    { id: 2, title: "Jackets", imageUrl: "https://i.ibb.co/cvpntL1/hats.png" },
    { id: 3, title: "Sneakers", imageUrl: "https://i.ibb.co/cvpntL1/hats.png" },
    { id: 4, title: "Women", imageUrl: "https://i.ibb.co/cvpntL1/hats.png" },
    { id: 5, title: "Men", imageUrl: "https://i.ibb.co/cvpntL1/hats.png" },
  ];

  return (
    <div className="category">
      {categories.map((category) => (
        <CategoryItemList
          key={category.id}
          categoryName={category.title}
          id={category.id}
          imageUrl={category.imageUrl}
        />
      ))}
    </div>
  );
}

export default CategoryContainer;
