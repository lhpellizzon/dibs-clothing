import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import CartItemList from "./CartItemList";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", closeDropDown, { capture: true });

    return () => document.removeEventListener("click", closeDropDown, { capture: true });
  }, []);
  return (
    <div ref={cartRef} className="relative cursor-pointer">
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <BsBag className="text-3xl" />
        <p className="absolute text-sm font-bold" style={{ left: "11px", top: "8px" }}>
          1
        </p>
      </button>

      {isOpen && (
        <div className="absolute h-96 w-[250px] top-10 right-[-32px] z-20 bg-white rounded border-[1px] border-black flex flex-col p-4 items-center space-y-2">
          <CartItemList />

          <Link
            to="/checkout"
            className="w-full px-4 py-2 bg-slate-900 text-amber-50 rounded text-center"
          >
            Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
