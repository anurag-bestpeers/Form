import React from "react";
import { useState } from "react";

const ValidateForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleValidate = (e) => {
    e.preventDefault();
    if (data.phone.length > 10) {
      alert("Phone number should be less than 10");
      return false;
    } else if (data.phone.length !== 10) {
      alert("please enter a valid number");
      return false;
    }
    alert("submitted");
  };
  return (
    <div>
      <h2>User Form</h2>
      <form className="container" onSubmit={handleValidate}>
        <div>
          <label>Enter Your Name</label>
          <input
            type="text"
            value={data.value}
            onChange={(e) =>
              setData({
                ...data,
                name: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label>Enter Your Email</label>
          <input
            type="text"
            value={data.email}
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label>Enter Your Phone</label>
          <input
            type="number"
            value={data.phone}
            onChange={(e) =>
              setData({
                ...data,
                phone: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label>Enter Your City</label>
          <input
            type="text"
            value={data.city}
            onChange={(e) =>
              setData({
                ...data,
                city: e.target.value,
              })
            }
          />
        </div>
        <div>
          <button>submit</button>
        </div>
      </form>
    </div>
  );
};

export default ValidateForm;
