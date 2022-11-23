import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

const CheckoutItem = ({ item }) => {
  const { addToCart, removeQuantityFromCart, removeProduct } = useContext(CartContext);
  const addQuantity = () => addToCart(item);
  const removeQuantity = () => removeQuantityFromCart(item);
  const removeItemFromBasket = () => {
    const confirmation = confirm("Are you sure you want to delete this item?");
    if (confirmation) {
      try {
        removeProduct(item);
        toast.success(`${item.name} removed from basket`);
      } catch (error) {
        toast.error(`Could not delete ${item.name} from basket`);
      }
    } else {
      return;
    }
  };

  return (
    <li className="flex gap-2 bg-slate-900 rounded pr-2 sm:pr-6 sm:gap-4 text-amber-50 font-bold">
      <div className="w-32 h-40 shrink-0 ">
        <img src={item.imageUrl} alt={item.name} className="w-full  h-full rounded" />
      </div>
      <div className="relative flex flex-col justify-evenly flex-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-md sm:text-xl">{item.name}</h2>
          <span className="text-xl">{item.price}€</span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xs sm:text-sm">Quantity</p>
          <div className="flex items-center">
            <button className="active:scale-75">
              <FaChevronLeft onClick={removeQuantity} />
            </button>
            <p className="text-xl"> {item.quantity}</p>
            <button className="active:scale-75" onClick={addQuantity}>
              <FaChevronRight />
            </button>
          </div>
        </div>
        <button
          className="absolute bottom-2 text-xl sm:text-2xl active:scale-95"
          onClick={removeItemFromBasket}
        >
          <RiDeleteBin6Fill />
        </button>
      </div>
    </li>
  );
};

export default CheckoutItem;
