import { BsBag } from "react-icons/bs";

const Cart = () => {
  return (
    <>
      <div className="relative cursor-pointer">
        <BsBag className="text-3xl" />
        <p className="absolute text-sm font-bold" style={{ left: "11px", top: "8px" }}>
          1
        </p>
        <div className="absolute h-96 w-[200px] top-10 right-[-32px] z-20 bg-white rounded border-[1px] border-black"></div>
      </div>
    </>
  );
};

export default Cart;
