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

const removeFromCart = (cartItems, productToRemove) => {
  return `${productToRemove} removed`;
};

const calculateTotal = (cartItems) =>
  cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

/* ---- CART CONTEXT ---- */
export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => null,
  addToCart: () => {},
  removeFromCart: () => {},
  quantityItems: null,
  setQuantityItems: () => {},
  totalPrice: 0,
  setTotalPrice: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [quantityItems, setQuantityItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newCount = cartItems.reduce((prev, curr) => prev + curr.quantity, 0);
    setQuantityItems(newCount);
    setTotalPrice(calculateTotal(cartItems));
  }, [cartItems]);

  const addToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const value = { cartItems, setCartItems, addToCart, removeFromCart, quantityItems, totalPrice };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
