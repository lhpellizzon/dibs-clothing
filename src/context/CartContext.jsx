import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: null,
  setCartItems: () => null,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    { name: "Luis", quantity: 2, price: 110 },
    { name: "Bruna", quantity: 3, price: 110 },
    { name: "Bruna", quantity: 3, price: 110 },
    { name: "Bruna", quantity: 3, price: 110 },
    { name: "Bruna", quantity: 3, price: 110 },
    { name: "Bruna", quantity: 3, price: 110 },
  ]);
  const value = { cartItems, setCartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
