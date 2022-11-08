const ProductItemList = ({ product }) => {
  const { name, price, imageUrl } = product;

  return (
    <div className="productList">
      <div className="productList-imageBody">
        <img src={imageUrl} alt="" className="productList-image" />
      </div>
      <div className="productList-details">
        <h1 className="productList-name">{name}</h1>
        <p className="productList-price">{price}€</p>
      </div>
      <button type="button" className="productList-button">
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductItemList;
