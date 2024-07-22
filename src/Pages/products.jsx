import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    images: "/images/shoes-1.jpg",
    title: "New Shoes",
    price: "$ 120",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nisi distinctio incidunt facilis sunt a aliquam? Qui accusantium officiis`,
  },
];
const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => {
        return (
          <CardProduct>
            <CardProduct.Header images={product.images} />
            <CardProduct.Body title={product.title}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        );
      })}
    </div>
  );
};

export default ProductsPage;
