import React, { useState } from "react";
import ValidateForm from "./Components/ValidateForm";
import DIsplayForm from "./Components/DIsplayForm";

const App = () => {
  const [parentData, setParentData] = useState([]);
  const [showtable, setShowTable] = useState(false);
  return (
    <div>
      <ValidateForm setParentData={setParentData} setShowTable={setShowTable} />
      {showtable && <DIsplayForm parentData={parentData} setParentData={setParentData} />}
    </div>
  );
};

export default App;
