import { BsBag } from "react-icons/bs";

const Cart = () => {
  return (
    <div className="relative">
      <BsBag className="text-3xl" />
      <p className="absolute text-sm font-bold" style={{ left: "11px", top: "8px" }}>
        1
      </p>
    </div>
  );
};

export default Cart;
