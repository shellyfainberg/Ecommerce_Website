import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styling/CheckOutPage.scss";
import "../styling/ShoppingCart.scss";

export default function ShoppingCartPageComp() {
  const cartProducts = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);

  const calcTotal = () => {
    let total = 0;
    cartProducts.forEach((product) => {
      total += product.price;
    });
    setTotalPrice(total);
  };
  const buyNow = () => {
    navigate("/checkout");
  };
  const deleteFomCart = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  useEffect(() => {
    calcTotal();
  }, []);

  return (
    <div className="Page-wrapper">
      {totalPrice > 0 && <h3>Shopping Cart:</h3>}
      <table style={{ width: "70%" }}>
        <thead></thead>
        <tbody>
          {cartProducts.map(product => {
            return (
              <tr key={product.id} style={{ borderRadius: "10px" }}>
                <td style={{ width: "20%" }}>
                  <img
                    src={product.thumbnail}
                    alt="product image"
                    style={{
                      width: "100px",
                      height: "80px",
                      borderRadius: "10px",
                    }}
                  />
                </td>
                <td>{product.title}</td>
                <td style={{ textAlign: "end", width: "50%" }}>
                  ${product.price}
                </td>
                &nbsp;
                <td>
                  <button
                    style={{
                      width: "fit-content",
                      backgroundColor: "unset",
                      color: "black",
                    }}
                    onClick={() => deleteFomCart(product.id)}
                  >
                    &#x2715;
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {totalPrice > 0 && <p>Total: ${totalPrice}</p>}
      {totalPrice > 0 && <button onClick={buyNow}>Buy Now</button>}

      {totalPrice == 0 && (
        <div className="emptyCart">
          <img src="../src/assets/empty-cart.png" alt="" />
          <h3>Nothing in Your Cart?</h3>
          <p>
            That's okay, take your time and browse through our products until
            you find what your'e looking for.
          </p>
        </div>
      )}
    </div>
  );
}
