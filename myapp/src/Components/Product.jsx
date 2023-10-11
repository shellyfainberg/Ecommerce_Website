import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function ProductComp(props) {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch({ type: "ADD", payload: product });
  };
  return (
    <div className="product-wrapper" key={props.product.id}>
      <Link to={`/product/${props.product.id}`}>
        <div className="image-container">
          <img src={props.product.thumbnail} alt="product image" />
        </div>
      </Link>

      <div className="product-info">
        <div className="productText">
          <div className="title">
            <span>{props.product.title}</span>
          </div>
          <div className="price">
            <span>${props.product.price}</span>
          </div>
        </div>
        <span className="ratingStar">&#9733;</span>&nbsp;
        <span>{props.product.rating}</span>
        <br />
        <button
          style={{ width: "105px", marginTop: "5px" }}
          onClick={() => addToCart(props.product)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductComp;
