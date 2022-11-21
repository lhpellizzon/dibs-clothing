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

const deleteQuantityFromCart = (cartItems, productToRemove) => {
  const { quantity } = productToRemove;
  if (quantity === 1) {
    const userConfirmation = confirm("Would you like to remove this item?");
    if (userConfirmation) {
      const newBasketWithoutItem = cartItems.filter((item) => item.id !== productToRemove.id);
      return [...newBasketWithoutItem];
    }
  } else {
    return cartItems.map((item) =>
      item.id === productToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
    );
  }
};

const calculateTotal = (cartItems) =>
  cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

/* ---- CART CONTEXT ---- */
export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => null,
  addToCart: () => {},
  removeQuantityFromCart: () => {},
  removeProduct: () => {},
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

  const removeQuantityFromCart = (productToRemove) => {
    setCartItems(deleteQuantityFromCart(cartItems, productToRemove));
  };

  const removeProduct = (product) => {};
  const value = {
    cartItems,
    setCartItems,
    addToCart,
    removeProduct,
    removeQuantityFromCart,
    quantityItems,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
