import React, { useState } from "react";
import ValidateForm from "./Components/ValidateForm";
import DIsplayForm from "./Components/DIsplayForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    let newData = parentData.filter((_, ind) => ind !== index);
    setParentData(newData);
    toast.error("data deleted");
    setShowTable(false);
  };

  const handleSubmit = (newData) => {
    if (editIndex > -1) {
      const updatedData = [...parentData];
      updatedData[editIndex] = newData;
      setParentData(updatedData);
      setEditIndex(-1);
    } else {
      setParentData((prev) => [...prev, newData]);
    }
    setShowTable(true);
    setEditData();
  };
  

  return (
    <div>
      <ToastContainer position="top-center" autoClose={1000}/>
      <ValidateForm
        setParentData={setParentData}
        setShowTable={setShowTable}
        onSubmit={handleSubmit}
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
