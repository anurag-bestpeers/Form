import React, { useEffect, useState } from "react";
import ValidateForm from "./Components/ValidateForm";
import DIsplayForm from "./Components/DIsplayForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [parentData, setParentData] = useState([
    {
      fname: "John",
      lname: "Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      city: "New York",
      gender: "Male",
    },
    {
      fname: "Jane",
      lname: "Smith",
      email: "jane.smith@example.com",
      phone: "098-765-4321",
      city: "Los Angeles",
      gender: "Female",
    },
    {
      fname: "Sam",
      lname: "Wilson",
      email: "sam.wilson@example.com",
      phone: "555-123-4567",
      city: "Chicago",
      gender: "Male",
    },
    {
      fname: "Emily",
      lname: "Clark",
      email: "emily.clark@example.com",
      phone: "234-567-8910",
      city: "Houston",
      gender: "Female",
    },
    {
      fname: "David",
      lname: "Taylor",
      email: "david.taylor@example.com",
      phone: "890-123-4567",
      city: "Phoenix",
      gender: "Male",
    },
    {
      fname: "Sophie",
      lname: "Anderson",
      email: "sophie.anderson@example.com",
      phone: "789-456-1230",
      city: "Philadelphia",
      gender: "Female",
    },
    {
      fname: "Michael",
      lname: "Lee",
      email: "michael.lee@example.com",
      phone: "345-678-9012",
      city: "San Antonio",
      gender: "Male",
    },
    {
      fname: "Anna",
      lname: "Brown",
      email: "anna.brown@example.com",
      phone: "678-234-5678",
      city: "San Diego",
      gender: "Female",
    },
    {
      fname: "James",
      lname: "Garcia",
      email: "james.garcia@example.com",
      phone: "567-890-1234",
      city: "Dallas",
      gender: "Male",
    },
    {
      fname: "Isabella",
      lname: "Martinez",
      email: "isabella.martinez@example.com",
      phone: "456-789-0123",
      city: "San Jose",
      gender: "Female",
    },
    {
      fname: "Chris",
      lname: "Lopez",
      email: "chris.lopez@example.com",
      phone: "321-654-9870",
      city: "Austin",
      gender: "Male",
    },
    {
      fname: "Emma",
      lname: "Harris",
      email: "emma.harris@example.com",
      phone: "876-543-2109",
      city: "Jacksonville",
      gender: "Female",
    },
    {
      fname: "Alex",
      lname: "Davis",
      email: "alex.davis@example.com",
      phone: "543-210-9876",
      city: "Fort Worth",
      gender: "Male",
    },
    {
      fname: "Olivia",
      lname: "Gonzalez",
      email: "olivia.gonzalez@example.com",
      phone: "789-012-3456",
      city: "Columbus",
      gender: "Female",
    },
    {
      fname: "Ethan",
      lname: "Martinez",
      email: "ethan.martinez@example.com",
      phone: "123-789-4560",
      city: "Charlotte",
      gender: "Male",
    },
    {
      fname: "Sophia",
      lname: "Rodriguez",
      email: "sophia.rodriguez@example.com",
      phone: "234-890-5678",
      city: "Indianapolis",
      gender: "Female",
    },
    {
      fname: "Daniel",
      lname: "Johnson",
      email: "daniel.johnson@example.com",
      phone: "654-321-0987",
      city: "San Francisco",
      gender: "Male",
    },
    {
      fname: "Chloe",
      lname: "White",
      email: "chloe.white@example.com",
      phone: "987-654-3210",
      city: "Seattle",
      gender: "Female",
    },
    {
      fname: "Liam",
      lname: "Moore",
      email: "liam.moore@example.com",
      phone: "321-987-6543",
      city: "Denver",
      gender: "Male",
    },
    {
      fname: "Ava",
      lname: "Perez",
      email: "ava.perez@example.com",
      phone: "432-109-8765",
      city: "Washington",
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

      setParentData((prev) => [obj, ...prev]);
    }
    setEditData();
  };

  return (
    <div>
      <ToastContainer position="top-center" autoClose={500} />
      <ValidateForm
        onSubmit={handleSubmit}
        editData={editData}
      />
      <DIsplayForm
        parentData={parentData}
        setParentData={setParentData}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </div>
  );
};

export default App;
