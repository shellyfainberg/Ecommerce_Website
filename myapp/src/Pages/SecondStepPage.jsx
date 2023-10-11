import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styling/CheckOutPage.scss";

function SecondStepPageComp() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const user = JSON.parse(sessionStorage["userDetails"]);
    setUserDetails(user);
  }, []);

  const nextPage = (e) => {
    e.preventDefault();
    console.log("form submited");
    sessionStorage["userDetails"] = JSON.stringify(userDetails);
    navigate("/checkout/3");
  };
  return (
    <>
      <div className="Page-wrapper">
        <h1>Checkout</h1>
        <form onSubmit={nextPage}>
          <label>
            {" "}
            <span>*</span>Address
          </label>
          <br />
          <input
            required
            onChange={(e) =>
              setUserDetails({ ...userDetails, address: e.target.value })
            }
            type="text"
            placeholder="Street Address"
          />
          <br />
          <label>
            {" "}
            <span>*</span>city
          </label>
          <br />
          <input
            required
            onChange={(e) =>
              setUserDetails({ ...userDetails, city: e.target.value })
            }
            type="text"
            placeholder="City"
          />
          <br />
          <label> State/Region</label>
          <br />
          <input
            onChange={(e) =>
              setUserDetails({ ...userDetails, state: e.target.value })
            }
            type="text"
            placeholder="State"
          />
          <br />
          <label>Postal Code</label>
          <br />
          <input
            onChange={(e) =>
              setUserDetails({ ...userDetails, postlCode: e.target.value })
            }
            type="text"
            placeholder="000000"
          />

          <div className="button-wrapper">
            <button type="submit" name="" id="">
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SecondStepPageComp;
