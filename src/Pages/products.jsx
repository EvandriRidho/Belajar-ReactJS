import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header images="/images/shoes-1.jpg" />
        <CardProduct.Body title="New Shoes">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nisi
          distinctio incidunt facilis sunt a aliquam? Qui accusantium officiis
          aspernatur? Iure eligendi eius laborum ea alias, accusamus voluptate
          nulla! Minima!
        </CardProduct.Body>
        <CardProduct.Footer price="$ 120" />
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
