import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import useComponentVisible from "../hooks/useComponentVisible";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="relative cursor-pointer"
        tabIndex={0}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={(e) => e.key === "Enter" && setIsOpen((prev) => !prev)}
      >
        <BsBag className="text-3xl" />
        <p className="absolute text-sm font-bold" style={{ left: "11px", top: "8px" }}>
          1
        </p>
        <div className={isOpen ? "block" : "hidden"}>
          <div className="absolute h-96 w-[250px] top-10 right-[-32px] z-20 bg-white rounded border-[1px] border-black flex flex-col p-4 items-center space-y-2">
            <div className="w-full h-72 bg-black">
              <div className="h-96"></div>
            </div>
            <Link
              to="/checkout"
              className="w-full px-4 py-2 bg-slate-900 text-amber-50 rounded text-center"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
