import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CheckoutItem = ({ item }) => {
  return (
    <li className="flex gap-4 bg-slate-900 rounded pr-6 text-amber-50 font-bold">
      <div>
        <img src={item.imageUrl} alt={item.name} className="w-32 h-40 rounded" />
      </div>
      <div className="flex flex-col justify-evenly flex-auto">
        <div className="flex justify-between">
          <h2 className="text-2xl">{item.name}</h2>
          <span className="text-xl">{item.price}€</span>
        </div>
        <div className="flex justify-between">
          <p className="text-sm">Quantity</p>
          <div className="flex items-center">
            <button className="active:scale-75">
              <FaChevronLeft />
            </button>
            <p className="text-xl"> {item.quantity}</p>
            <button className="active:scale-75">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CheckoutItem;
