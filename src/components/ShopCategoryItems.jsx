const ShopCategoryItems = ({ item }) => {
  const { id, name, price, imageUrl } = item;
  return (
    <div className="bg-white rounded flex flex-col w-44 h-96" id={id}>
      <div className="w-full h-52">
        <img src={imageUrl} alt="" className="w-full h-full rounded-t" />
      </div>
      <div className="h-full flex flex-col justify-around">
        <div className="pt-4">
          <h1 className="">{name}</h1>
          <p className="">{price}€</p>
        </div>
        <button type="button" className="">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ShopCategoryItems;
