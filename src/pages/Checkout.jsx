import { useContext } from "react";
import { Helmet } from "react-helmet";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const cart = useContext(CartContext);
  console.log(cart);
  return (
    <>
      <Helmet>
        <title>Safe Checkout | Dibs</title>
      </Helmet>
    </>
  );
}

export default Checkout;
