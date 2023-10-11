import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { geProduct } from "../services/APIservice";
import "../styling/product.scss";

function ProductPageComp() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState();
  const [ChangingImage, setChangingImage] = useState();

  const fetchProdouctData = async () => {
    const prod = await geProduct(params.id);
    setProduct(prod);
  };

  useEffect(() => {
    fetchProdouctData();
  }, []);

  const startWizard = () => {
    dispatch({ type: "ADD", payload: product });
    navigate("/checkout");
  };

  const addToCart = () => {
    dispatch({ type: "ADD", payload: product });
  };
  const ratingStars = () => {
    const starts = [];
    const startsNum = Math.round(product.rating);
    for (let i = 0; i < startsNum; i++) {
      starts.push(
        <span key={i} className="ratingStar">
          &#9733;
        </span>
      );
    }
    return starts;
  };
  return (
    <>
      {product && (
        <div className="product-inner-wrapper">
          <div className="more-images">
            {product.images.map((url, index) => {
              return (
                <div
                  key={index}
                  className="images-container"
                  onClick={() => setChangingImage(url)}
                >
                  <img src={url} alt="more product images" />
                </div>
              );
            })}
          </div>

          <div className="primary-image-container">
            <img
              src={ChangingImage || product.images[0]}
              alt="primary product image"
            />
          </div>

          <div className="product-details">
            <h3>{product.title}</h3>
            <span>{product.description}</span>
            <br />

            {ratingStars()}
            <span>&nbsp;{product.rating}</span>
            <br />
            <span className="price">${product.price}</span>
            <br />
            <br />
            <button className="buy" onClick={startWizard}>
              Buy Now
            </button>
            <button className="addToCart" onClick={addToCart}>
              Add To Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductPageComp;
