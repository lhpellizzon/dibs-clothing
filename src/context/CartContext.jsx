import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const isCartItem = cartItems.find((item) => item.id === productToAdd.id);

  if (isCartItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => null,
  addToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { cartItems, setCartItems, addToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
