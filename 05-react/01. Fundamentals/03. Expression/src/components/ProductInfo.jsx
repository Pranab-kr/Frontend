const ProductInfo = () => {
  const product = {
    name: "Asus laptop",
    price: 55000,
    availabilaty: "In stock",
  };
  return <div>
    <h1>Product Info</h1>

    <h3>Name: {product.name}</h3>
    <h3>price: {product.price}</h3>
    <h3>availabilaty: {product.availabilaty}</h3>
  </div>;
};

export default ProductInfo;
