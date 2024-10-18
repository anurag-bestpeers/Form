import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
const DIsplayForm = ({ parentData, handleEdit, handleDelete }) => {
  return (
    <div className="tableC">
      <table>
        <thead>
          <tr>
            <th>FullName</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {parentData &&
            parentData.map((item, index) => (
              <tr key={index}>
                <td>
                  {item.fname} {item.lname}
                </td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.city}</td>
                <td>{item.gender ? item.gender : "Null"}</td>
                <td className="btn-div">
                  <button
                    className="actionsBtn"
                    onClick={() => handleEdit(item, index)}
                  >
                    <BsPencilSquare />
                  </button>
                  <button
                    className="actionsBtn"
                    onClick={() => handleDelete(index)}
                  >
                    <MdOutlineDelete />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DIsplayForm;
