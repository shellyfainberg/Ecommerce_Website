import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductsComp from "../Components/Products";
import ProductPageComp from "./ProductPage";
import FirstStepPageComp from "./FirstStepPage";
import SecondStepPageComp from "./SecondStepPage";
import ThirdStepPageComp from "./ThirdStepPage";
import OrderCompleted from "./OrderCompleted";
import "../styling/mainPage.scss";
import ShoppingCartPageComp from "./ShoppingCartPage";
import { useEffect, useState } from "react";

function MainPageComp() {
  const cartProducts = useSelector((state) => state);
  const navigate = useNavigate();
  const [animateJump, setAnimateJump] = useState(false);

  const goBackToMainPage = () => {
    navigate("/");
  };
  const goToCartPage = () => {
    navigate("/shoppingCart");
  };
  useEffect(() => {
    if (cartProducts.length > 0) {
      setAnimateJump(true);
    }
    const animationTimeout = setTimeout(() => {
      setAnimateJump(false);
    }, 500);

    return () => clearTimeout(animationTimeout);
  }, [cartProducts.length]);

  return (
    <>
      <div className="mainPage-wrapper">
        <button
          onClick={goBackToMainPage}
          style={{ color: "#fff", cursor: "pointer", fontSize: "18px" }}
        >
          E-commerce Web
        </button>
        <button onClick={goToCartPage}>
          <div className="cart-wrapper">
            <img src="../src/assets/cart.png" alt="cart icon" />
            <div className={`counter ${animateJump ? "jump" : ""}`}>
              {cartProducts.length}
            </div>
          </div>
        </button>
      </div>

      <Routes>
        <Route path="/" element={<ProductsComp />} />
        <Route path="/product/:id" element={<ProductPageComp />} />

        <Route path="/checkout" element={<FirstStepPageComp />} />
        <Route path="/checkout/2" element={<SecondStepPageComp />} />
        <Route path="/checkout/3" element={<ThirdStepPageComp />} />
        {/* <Route path="final" element={<OrderCompleted />} /> */}
        <Route path="/shoppingCart" element={<ShoppingCartPageComp />} />
      </Routes>
    </>
  );
}

export default MainPageComp;
