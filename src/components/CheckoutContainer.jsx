import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CheckoutItem from "./CheckoutItem";

const CheckoutContainer = () => {
  const { cartItems } = useContext(CartContext);
  const total = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
  console.log(total);
  return (
    <section id="checkout">
      <div className="container mx-auto flex flex-col items-center text-center py-4">
        <h1 className="text-3xl font-bold uppercase p-4">Checkout</h1>
        <div className="flex flex-col space-y-5 w-full md:max-w-2xl">
          <ul className="flex flex-col gap-3">
            {cartItems.map((item) => (
              <CheckoutItem key={item.id} item={item} />
            ))}
          </ul>
          <div className="">
            <p>Total</p>
            <span>{total}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutContainer;
