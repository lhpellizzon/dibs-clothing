import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const isCartItem = cartItems.find((item) => item.id === productToAdd.id);

  if (isCartItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

/* ---- CART CONTEXT ---- */
export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => null,
  addToCart: () => {},
  quantityItems: null,
  setQuantityItems: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [quantityItems, setQuantityItems] = useState(0);

  useEffect(() => {
    const newCount = cartItems.reduce((prev, curr) => prev + curr.quantity, 0);
    setQuantityItems(newCount);
  }, [cartItems]);

  const addToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { cartItems, setCartItems, addToCart, quantityItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
