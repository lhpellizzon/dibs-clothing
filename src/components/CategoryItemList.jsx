function CategoryItemList({ categoryName, id }) {
  return (
    <div
      className={`bg-red-500 h-96${
        id === 4 || id === 5 ? "col-span-3" : "col-span-2"
      }`}
    >
      {/* img */}
      <div className="flex flex-col text-center">
        <h2>{categoryName}</h2>
        <p>Show Now</p>
      </div>
    </div>
  );
}

export default CategoryItemList;
