import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductItem = ({ product }) => {
  const { name, price, imageUrl, id } = product;
  const { addToCart } = useContext(CartContext);

  const addProductToCart = () => addToCart(product);

  return (
    <div className="productList" id={id}>
      <div className="productList-imageBody">
        <img src={imageUrl} alt="" className="productList-image" />
      </div>
      <div className="productList-details">
        <h1 className="productList-name">{name}</h1>
        <p className="productList-price">{price}€</p>
      </div>
      <button onClick={addProductToCart} type="button" className="productList-button">
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductItem;
