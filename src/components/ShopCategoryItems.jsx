import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ShopCategoryItems = ({ item }) => {
  const { id, name, price, imageUrl } = item;
  const { addToCart } = useContext(CartContext);

  const addProductToCart = () => addToCart(item);
  return (
    <div className="rounded flex flex-col h-80" id={id}>
      <div className="w-full min-h-[70%]">
        <img src={imageUrl} alt="" className="w-full h-full rounded-t" />
      </div>
      <div className="h-full flex flex-col justify-between text-center">
        <div className="pt-2">
          <h1 className="mb-2">{name}</h1>
          <p className="text-md font-bold">{price}€</p>
        </div>
        <button
          type="button"
          className="w-full bg-slate-900 px-2 py-1 rounded text-amber-50"
          onClick={addProductToCart}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ShopCategoryItems;
