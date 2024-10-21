import React, { useState } from "react";
import ValidateForm from "./Components/ValidateForm";
import DIsplayForm from "./Components/DIsplayForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const [parentData, setParentData] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [editData, setEditData] = useState();
  const [editIndex, setEditIndex] = useState(-1);

  const handleEdit = (data, index) => {
    setEditData(data);
    setEditIndex(index);
    setShowTable(false);
  };
  const handleDelete = (index) => {
    const newData = parentData.filter((_, ind) => ind !== index);
    setParentData(newData);
    toast.error("Data deleted");
    if (newData.length === 0) {
      setShowTable(false);
    }
  };

  const Capitalize = (name) => {
    let count = 0;
    let str = "";
    for (let i = 0; i < name.length; i++) {
      if (name[i] !== "" && count == 0) {
        let data = name[i].toUpperCase();
        str += data;

        count++;
      } else if (name[i] == "") {
        count = 0;
      } else {
        str += name[i];
      }
    }
    return str;
  };

  const handleSubmit = (newData) => {
    if (editIndex > -1) {
      const updatedData = [...parentData];
      let newFname = Capitalize(newData.fname);
      let newLname = Capitalize(newData.lname);
      let obj = {
        ...newData,
        fname: newFname,
        lname: newLname,
      };
      updatedData[editIndex] = obj;
      setParentData(updatedData);
      setEditIndex(-1);
    } else {
      let newFname = Capitalize(newData.fname);
      let newLname = Capitalize(newData.lname);
      let obj = {
        ...newData,
        fname: newFname,
        lname: newLname,
      };

      setParentData((prev) => [...prev, obj]);
    }
    setShowTable(true);
    setEditData();
  };

  return (
    <div>
      <ToastContainer position="top-center" autoClose={1000} />
      <ValidateForm
        setParentData={setParentData}
        setShowTable={setShowTable}
        onSubmit={handleSubmit}
        Capitalize={Capitalize}
        editData={editData}
      />
      {showTable && (
        <DIsplayForm
          parentData={parentData}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default App;
