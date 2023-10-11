import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../styling/CheckOutPage.scss";

function FirstStepPageComp() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});

  const next = () => {
    sessionStorage["userDetails"] = JSON.stringify(userDetails);
    console.log("userDetails", userDetails);
    navigate("2");
  };
  return (
    <>
      <div className="Page-wrapper">
        <h1>Checkout</h1>
        <form onSubmit={next}>
          <label>
            <span>*</span>First Name
          </label>
          <br />
          <input
            required
            onChange={(e) =>
              setUserDetails({ ...userDetails, fname: e.target.value })
            }
            type="text"
            placeholder="First name"
          />
          <br />
          <label>
            <span>*</span>Last Name
          </label>
          <br />

          <input
            required
            onChange={(e) =>
              setUserDetails({ ...userDetails, lname: e.target.value })
            }
            type="text"
            placeholder="Last name"
          />
          <br />
          <label>
            <span>*</span>Email address
          </label>
          <br />
          <input
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
            type="text"
            placeholder="Name@email.com"
          />
          <br />
          <label>Phone Number</label>
          <PhoneInput
            inputStyle={{
              fontSize: "12px",
              color: "rgb(134 129 129)",
              width: "278px",
            }}
            country={"il"}
            placeholder={"+972 000 000 0000"}
            onChange={(e) => setUserDetails({ ...userDetails, phone: e })}
          />
          <div className="button-wrapper">
            <button type="submit">Next</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FirstStepPageComp;
