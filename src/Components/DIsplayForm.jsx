import React from "react";

const DIsplayForm = ({ newData }) => {
  return (
    <div>
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
          {newData &&
            newData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.city}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default DIsplayForm;
