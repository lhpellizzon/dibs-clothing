const ProductItemList = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="productList">
      <img src={imageUrl} alt="" className="productList-image" />
      <h1 className="productList-name">{name}</h1>
      <p className="productList-price">{price}</p>
    </div>
  );
};

export default ProductItemList;
