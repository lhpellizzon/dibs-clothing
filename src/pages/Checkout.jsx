import { Helmet } from "react-helmet";
import CheckoutContainer from "../components/CheckoutContainer";

function Checkout() {
  return (
    <>
      <Helmet>
        <title>Safe Checkout | Dibs</title>
      </Helmet>
      <CheckoutContainer />
    </>
  );
}

export default Checkout;
