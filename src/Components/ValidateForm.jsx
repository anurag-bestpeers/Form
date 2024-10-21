import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ValidateForm = ({ onSubmit, editData,Capitalize }) => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    city: "",
    gender: "select",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editData) {
      setData(editData);
    }
  }, [editData]);

  const validate = () => {
    const message = {};
    const fields = ["fname", "lname", "email", "phone", "city"];

    fields.forEach((field) => {
      if (data[field] === "") {
        message[field] = `${field} is required`;
      }
    });
    return message;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formError = validate();
    if (Object.keys(formError).length > 0) {
      setErrors(formError);
      toast.error("Please fill in all the required fields.");
    } else {
      toast.success("Form submitted successfully!");
      onSubmit(data);
      
      setData({ fname: "", lname: "", email: "", phone: "", city: "",gender:"select" });
      // Capitalize()
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    // console.log(value);
    let val=value.trim()

    setData({
      ...data,
      [name]: val,
    });
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  return (
    <>
      <form className="container" onSubmit={handleSubmit}>
        <div className="firstRow">
          <div>
            <label>FirstName</label>
            <input
              type="text"
              name="fname"
              value={data.fname}
              onChange={handleInput}
            />
            <p style={{ margin: "0px" }}>{errors.fname && errors.fname}</p>
          </div>
          <div>
            <label>LastName</label>
            <input
              type="text"
              name="lname"
              value={data.lname}
              onChange={handleInput}
            />
            <p style={{ margin: "0px" }}>{errors.lname && errors.lname}</p>
          </div>
          <div>
            <label> Email</label>
            <input
              type="email"
              value={data.email}
              name="email"
              onChange={handleInput}
            />
            <p style={{ margin: "0px" }}>{errors.email && errors.email}</p>
          </div>
        </div>

        <div className="secondRow">
          <div>
            <label>Phone</label>
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
          <div>
            <label>City</label>
            <input
              type="text"
              name="city"
              value={data.city}
              onChange={handleInput}
            />
            <p style={{ margin: "0px" }}>{errors.city && errors.city}</p>
          </div>
          <div>
            <div className="select">
              <label htmlFor="">Gender</label>
              <select value={data.gender} name="gender" onChange={handleInput}>
                <option selected disabled value="select">
                  Select
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        <div className="btnRow">
          <button type="submit">Add</button>
        </div>
      </form>
      <hr className="division" />
    </>
  );
};

export default ValidateForm;
