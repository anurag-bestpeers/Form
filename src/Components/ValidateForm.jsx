import React from "react";
import { useState } from "react";

const ValidateForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const message = {};

    if (data.name === "") {
      message.name = "username is required";
    }
    if (data.email === "") {
      message.email = "email is required";
    }
    if (data.phone === "") {
      message.phone = "phone is required";
    } else if (data.phone.length !== 10) {
      message.phone = "Enter a valid number";
    }
    if (data.city === "") {
      message.city = "city is required";
    }
    return message;
  };

  const handleValidate = (e) => {
    e.preventDefault();

    const formError = validate();

    if (Object.keys(formError).length > 0) {
      setErrors(formError);
    } else {
      alert(`
            name : ${data.name}
            email : ${data.email}
            phone : ${data.phone}
            city : ${data.city}
            `);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });

    if (name == "name") {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
    if (name == "email") {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
    if (name == "phone") {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
    if (name == "city") {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };
  return (
    <>
      <h2>User Form</h2>
      <form className="container" onSubmit={handleValidate}>
        <div>
          <label>Enter Your Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={(e) => handleInput(e)}
          />
          <p style={{ margin: "0px" }}>
            {errors.name && <span>{errors.name}</span>}
          </p>
        </div>
        <div>
          <label>Enter Your Email</label>
          <input
            type="text"
            value={data.email}
            name="email"
            onChange={(e) => handleInput(e)}
          />
          <p style={{ margin: "0px" }}>
            {errors.email && <span>{errors.email}</span>}
          </p>
        </div>
        <div>
          <div>
            <label>Enter Your Phone</label>
            <input
              type="number"
              value={data.phone}
              name="phone"
              onChange={(e) => handleInput(e)}
            />
            <p style={{ margin: "0px" }}>
              {errors.phone && <span>{errors.phone}</span>}
            </p>
          </div>
        </div>
        <div>
          <label>Enter Your City</label>
          <input
            type="text"
            name="city"
            value={data.city}
            onChange={(e) => handleInput(e)}
          />
          <p style={{ margin: "0px" }}>
            {errors.city && <span>{errors.city}</span>}
          </p>
        </div>
        <div>
          <button>submit</button>
        </div>
      </form>
    </>
  );
};

export default ValidateForm;
