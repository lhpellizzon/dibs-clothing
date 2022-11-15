import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const CartItemList = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <div className="w-full h-72 overflow-scroll">
      <ul>
        {cartItems.map((item, index) => (
          <CartItem key={index} cartItem={item} />
        ))}
      </ul>
    </div>
  );
};

export default CartItemList;
