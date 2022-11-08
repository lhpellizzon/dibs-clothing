const ProductItemList = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div>
      <img src={imageUrl} alt="" />
      <h1>{name}</h1>
      <p>{price}</p>
    </div>
  );
};

export default ProductItemList;
