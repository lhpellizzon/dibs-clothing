import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CheckoutItem = ({ item }) => {
  return (
    <li className="flex gap-4 bg-slate-100 mx-5 rounded pr-6">
      <div>
        <img src={item.imageUrl} alt={item.name} className="w-32 h-40 rounded" />
      </div>
      <div className="flex flex-col justify-evenly flex-auto">
        <div className="flex justify-between">
          <h2 className="">{item.name}</h2>
          <span>€{item.price}</span>
        </div>
        <div className="flex justify-between">
          <p>Quantity</p>
          <div className="flex items-center">
            <button>
              <FaChevronLeft />
            </button>
            <p> {item.quantity}</p>
            <button>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CheckoutItem;
