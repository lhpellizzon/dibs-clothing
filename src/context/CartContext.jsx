import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => {},
});

export const ProductProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(cartItems);
  const value = { cartItems, setCartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
