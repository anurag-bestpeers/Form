import React, { useState } from "react";
import ValidateForm from "./Components/ValidateForm";
import DIsplayForm from "./Components/DIsplayForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const [parentData, setParentData] = useState([
    {
      fname: "John1",
      lname: "Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      city: "New York",
      gender: "Male",
    },
    {
      fname: "Jane1",
      lname: "Smith",
      email: "jane.smith@example.com",
      phone: "098-765-4321",
      city: "Los Angeles",
      gender: "Female",
    },
    {
      fname: "Sam1",
      lname: "Wilson",
      email: "sam.wilson@example.com",
      phone: "555-123-4567",
      city: "Chicago",
      gender: "Female",
    },
    {
      fname: "John1",
      lname: "Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      city: "New York",
      gender: "Male",
    },
    {
      fname: "Jane1",
      lname: "Smith",
      email: "jane.smith@example.com",
      phone: "098-765-4321",
      city: "Los Angeles",
      gender: "Female",
    },
    {
      fname: "Sam2",
      lname: "Wilson",
      email: "sam.wilson@example.com",
      phone: "555-123-4567",
      city: "Chicago",
      gender: "Female",
    },
    {
      fname: "John2",
      lname: "Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      city: "New York",
      gender: "Male",
    },
    {
      fname: "Jane2",
      lname: "Smith",
      email: "jane.smith@example.com",
      phone: "098-765-4321",
      city: "Los Angeles",
      gender: "Female",
    },
    {
      fname: "Sam2",
      lname: "Wilson",
      email: "sam.wilson@example.com",
      phone: "555-123-4567",
      city: "Chicago",
      gender: "Female",
    },
    {
      fname: "John2",
      lname: "Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      city: "New York",
      gender: "Male",
    },
    {
      fname: "Jane3",
      lname: "Smith",
      email: "jane.smith@example.com",
      phone: "098-765-4321",
      city: "Los Angeles",
      gender: "Female",
    },
    {
      fname: "Sam3",
      lname: "Wilson",
      email: "sam.wilson@example.com",
      phone: "555-123-4567",
      city: "Chicago",
      gender: "Female",
    },
    {
      fname: "John3",
      lname: "Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      city: "New York",
      gender: "Male",
    },
    {
      fname: "Jane3",
      lname: "Smith",
      email: "jane.smith@example.com",
      phone: "098-765-4321",
      city: "Los Angeles",
      gender: "Female",
    },
    {
      fname: "Sam3",
      lname: "Wilson",
      email: "sam.wilson@example.com",
      phone: "555-123-4567",
      city: "Chicago",
      gender: "Female",
    },
    {
      fname: "Sam4",
      lname: "Wilson",
      email: "sam.wilson@example.com",
      phone: "555-123-4567",
      city: "Chicago",
      gender: "Female",
    },
    {
      fname: "Sam4",
      lname: "Wilson",
      email: "sam.wilson@example.com",
      phone: "555-123-4567",
      city: "Chicago",
      gender: "Female",
    },
    {
      fname: "Sam4",
      lname: "Wilson",
      email: "sam.wilson@example.com",
      phone: "555-123-4567",
      city: "Chicago",
      gender: "Female",
    },
    {
      fname: "Sam4",
      lname: "Wilson",
      email: "sam.wilson@example.com",
      phone: "555-123-4567",
      city: "Chicago",
      gender: "Female",
    },
    {
      fname: "Sam4",
      lname: "Wilson",
      email: "sam.wilson@example.com",
      phone: "555-123-4567",
      city: "Chicago",
      gender: "Female",
    },
    {
      fname: "Sam5",
      lname: "Wilson",
      email: "sam.wilson@example.com",
      phone: "555-123-4567",
      city: "Chicago",
      gender: "Female",
    },
    {
      fname: "Sam5",
      lname: "Wilson",
      email: "sam.wilson@example.com",
      phone: "555-123-4567",
      city: "Chicago",
      gender: "Female",
    },
    {
      fname: "Sam5",
      lname: "Wilson",
      email: "sam.wilson@example.com",
      phone: "555-123-4567",
      city: "Chicago",
      gender: "Female",
    },
    {
      fname: "Sam5",
      lname: "Wilson",
      email: "sam.wilson@example.com",
      phone: "555-123-4567",
      city: "Chicago",
      gender: "Female",
    },
  ]);
  const [editData, setEditData] = useState();
  const [editIndex, setEditIndex] = useState(-1);

  const [searchValue, setSearchValue] = useState("");

  const handleEdit = (data, index) => {
    setEditData(data);
    setEditIndex(index);
  };
  const handleDelete = (index) => {
    const newData = parentData.filter((_, ind) => ind !== index);
    setParentData(newData);
    toast.error("Data deleted");
    if (newData.length === 0) {
    }
  };

  const Capitalize = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  

  const handleSubmit = (newData) => {
    if (editIndex > -1) {
      const updatedData = [...parentData];
      let obj = {
        ...newData,
        fname: Capitalize(newData.fname),
        lname: Capitalize(newData.lname),
      };
      updatedData[editIndex] = obj;
      setParentData(updatedData);
      setEditIndex(-1);
    } else {
      let obj = {
        ...newData,
        fname: Capitalize(newData.fname),
        lname: Capitalize(newData.lname),
      };

      setParentData((prev) => [...prev, obj]);
    }
    setEditData();
  };

  return (
    <div>
      <ToastContainer position="top-center" autoClose={500} />
      <ValidateForm
        setParentData={setParentData}
        onSubmit={handleSubmit}
        Capitalize={Capitalize}
        editData={editData}
      />
      <DIsplayForm
        parentData={parentData}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </div>
  );
};

export default App;
