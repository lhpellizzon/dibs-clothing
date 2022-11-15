import CartItem from "./CartItem";

const CartItemList = () => {
  const ex = [
    { name: "Luis", quantity: 2, price: 110 },
    { name: "Bruna", quantity: 3, price: 110 },
    { name: "Bruna", quantity: 3, price: 110 },
    { name: "Bruna", quantity: 3, price: 110 },
    { name: "Bruna", quantity: 3, price: 110 },
    { name: "Bruna", quantity: 3, price: 110 },
  ];
  return (
    <div className="w-full h-72 overflow-scroll">
      <ul>
        {ex.map((obj) => (
          <CartItem cartItem={obj} />
        ))}
      </ul>
    </div>
  );
};

export default CartItemList;
