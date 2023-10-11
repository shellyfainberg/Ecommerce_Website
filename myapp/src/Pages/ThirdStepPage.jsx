import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../styling/CheckOutPage.scss";

function ThirdStepPageComp() {
  const [orderDetails, setOrderDetails] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const cartProducts = useSelector((state) => state);

  useEffect(() => {
    const obj = {};
    const userDetails = JSON.parse(sessionStorage["userDetails"]);
    obj.userDetails = userDetails;
    setOrderDetails(obj);

    let total = 0;
    cartProducts.forEach((product) => {
      total += product.price;
    });
    setTotalPrice(total);
  }, []);

  return (
    <>
      <div className="Page-wrapper">
        <h2>Order Details:</h2>
        <table>
          <thead></thead>
          {cartProducts.map((pro) => {
            return (
              <tbody key={pro.id}>
                <tr>
                  <td>{pro.title}</td>
                  <td style={{ textAlign: "end" }}>${pro.price}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
        <p>Total :${totalPrice}</p>
        <h2>Shipping Details:</h2>
        {orderDetails.userDetails?.fname} &nbsp;
        {orderDetails.userDetails?.lname} <br />
        {orderDetails.userDetails?.email} <br />+
        {orderDetails.userDetails?.phone} <br />
        <br />
        {orderDetails.userDetails?.address} <br />
        {orderDetails.userDetails?.city} <br />
        <br />
        <Popup
          contentStyle={{ borderRadius: "10px" }}
          trigger={<button>Confirm Order</button>}
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <div className="content">
                <img src="../src/assets/check.png" alt="" />
                <h2> Thank you for your order!</h2>
                <p>
                  The order confirmation has been sent to your email address .
                </p>
              </div>
              <div className="buttons-wrapper">
                <button onClick={() => close()}>Close modal</button>
              </div>
            </div>
          )}
        </Popup>
        {/* <button onClick={() => navigate("/final")}>Confirm Order</button> */}
      </div>
    </>
  );
}

export default ThirdStepPageComp;
