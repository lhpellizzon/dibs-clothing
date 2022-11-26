import { useState, useEffect, useRef, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import CartItemList from "./CartItemList";
import { motion } from "framer-motion";
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

  const { quantityItems } = useContext(CartContext);

  return (
    <div ref={cartRef} className="relative cursor-pointer">
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <BsBag className="text-3xl" />
        <div className="absolute top-0 w-full h-full flex items-center">
          <p className="text-sm font-bold w-full">{quantityItems}</p>
        </div>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute h-96 w-[250px] top-10 right-[-32px] z-20 bg-white rounded border-[1px] border-black flex flex-col p-4 items-center space-y-2"
        >
          <CartItemList />
          <Link
            to="/checkout"
            className="w-full px-4 py-2 bg-slate-900 text-amber-50 rounded text-center"
          >
            Checkout
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
