import React, { useState } from "react";

const DIsplayForm = ({ parentData, setParentData }) => {
  const [editIndex, setEditIndex] = useState(-1);
  const [editData, setEditData] = useState();

  const handleEdit = (item, id) => {
    setEditIndex(id);
    setEditData(item);
  };

  const handleInput = (e) => {
    const { value, name } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = (index) => {
    if (editData.phone.length !== 10) {
      alert("phone number size must be 10");
      return;
    }

    let data = [...parentData];
    data[index] = editData;
    setParentData(data);
    setEditIndex(-1);
  };
  return (
    <div className="tableC">
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {parentData &&
            parentData.map((item, index) => {
              if (index == editIndex) {
                return (
                  <tr>
                    <td>
                      <input
                        type="text"
                        value={editData.name}
                        name="name"
                        onChange={handleInput}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={editData.email}
                        name="email"
                        onChange={handleInput}
                      />
                    </td>
                    <td>
                      <input
                        minLength={10}
                        maxLength={10}
                        type="tel"
                        value={editData.phone}
                        name="phone"
                        onChange={handleInput}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={editData.city}
                        name="city"
                        onChange={handleInput}
                      />
                    </td>
                    <td onClick={() => handleUpdate(item.id)}>
                      {" "}
                      <button>update</button>{" "}
                    </td>
                  </tr>
                );
              } else {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.city}</td>
                    <td onClick={() => handleEdit(item, item.id)}>
                      {" "}
                      <button>edit</button>{" "}
                    </td>
                  </tr>
                );
              }
            })}
        </tbody>
      </table>
    </div>
  );
};

export default DIsplayForm;
