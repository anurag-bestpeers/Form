import React, { useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
const DIsplayForm = ({
  parentData,
  handleEdit,
  handleDelete,
  searchValue,
  setSearchValue,
}) => {
  const [copiedData, setCopiedData] = useState(parentData);

  useEffect(() => {
    const SearchedData = parentData.filter((item, _) => {
      return item.fname.toLowerCase().includes(searchValue.toLowerCase());
    });
    if (SearchedData) {
      setCopiedData(SearchedData);
    }
  }, [searchValue, copiedData]);
  return (
    <>
      <div className="search">
        <h3>Data List</h3>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="search by name"
        />
      </div>
      {copiedData.length > 0 ? (
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
              {copiedData &&
                copiedData.map((item, index) => (
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
      ) : (
        <h3 style={{ textAlign: "center" }}>No data found</h3>
      )}
    </>
  );
};

export default DIsplayForm;
