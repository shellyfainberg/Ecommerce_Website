import { useEffect, useState } from "react";
import ProductComp from "./Product";
import { getAllProducts } from "../services/APIservice";
import "../styling/products.scss";

function ProductsComp() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const prods = await getAllProducts();
    setProducts(prods);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="products-wrapper">
        {products &&
          products.map((p) => {
            return <ProductComp key={p.id} product={p} />;
          })}
      </div>
    </>
  );
}

export default ProductsComp;
