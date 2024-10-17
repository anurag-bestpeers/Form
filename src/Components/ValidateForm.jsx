import React from "react";
import { useState } from "react";

const ValidateForm = ({ setParentData, setShowTable }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const [errors, setErrors] = useState({});
  const [id, setId] = useState(0);

  const validate = () => {
    const message = {};
    const newData1 = ["name", "email", "phone", "city"];

    for (let element of newData1) {
      if (data[element] == "") {
        message[element] = `${element} is required`;
      }
    }
    return message;
  };

  const handleValidate = (e) => {
    e.preventDefault();

    const formError = validate();

    if (Object.keys(formError).length > 0) {
      setErrors(formError);
    } else {
      setShowTable(true);
      setParentData((prev) => [...prev, data]);
      setData({
        name: "",
        email: "",
        phone: "",
        city: "",
      });
    }

    setId((prev) => prev + 1);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    let newValue = value.trim();

    setData({
      ...data,
      [name]: newValue,
      id,
    });

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
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
            onChange={handleInput}
          />
          <p style={{ margin: "0px" }}>{errors.name && errors.name}</p>
        </div>
        <div>
          <label>Enter Your Email</label>
          <input
            type="email"
            value={data.email}
            name="email"
            onChange={handleInput}
          />
          <p style={{ margin: "0px" }}>{errors.email && errors.email}</p>
        </div>
        <div>
          <div>
            <label>Enter Your Phone</label>
            <input
              minLength={10}
              maxLength={10}
              type="tel"
              value={data.phone}
              name="phone"
              onChange={handleInput}
            />
            <p style={{ margin: "0px" }}>{errors.phone && errors.phone}</p>
          </div>
        </div>
        <div>
          <label>Enter Your City</label>
          <input
            type="text"
            name="city"
            value={data.city}
            onChange={handleInput}
          />
          <p style={{ margin: "0px" }}>{errors.city && errors.city}</p>
        </div>
        <div>
          <button>submit</button>
        </div>
      </form>
    </>
  );
};

export default ValidateForm;
