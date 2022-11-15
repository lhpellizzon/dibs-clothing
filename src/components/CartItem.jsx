const CartItem = ({ cartItem }) => {
  const { name, quantity, price } = cartItem;

  return (
    <li className="flex my-3 gap-3 items-center">
      <div className="bg-black h-20 w-16"></div>
      <div>
        <h2>{name}</h2>
        <span>
          {quantity} X {price}€
        </span>
      </div>
    </li>
  );
};

export default CartItem;
