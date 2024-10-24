import React, { useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const DisplayForm = ({
  parentData,
  handleEdit,
  handleDelete,
  searchValue,
  setSearchValue,
  setParentData,
}) => {
  const [copiedData, setCopiedData] = useState([]);
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [pageSkip, setPageSkip] = useState(0);
  const pageSize = 5;

  useEffect(() => {
    const searchedData = parentData.filter((item) => {
      const fullName = `${item.fname.toLowerCase()} ${item.lname.toLowerCase()}`;
      return fullName.includes(searchValue.toLowerCase());
    });

    setCopiedData(searchedData);
    setPageSkip(0);
  }, [parentData, searchValue]);

  const handleSort = (field) => {
    const sortedData = [...copiedData].sort((a, b) => {
      let fieldA = a[field];
      let fieldB = b[field];

      if (sortOrder === "asc") {
        return fieldA > fieldB ? 1 : -1;
      } else {
        return fieldA < fieldB ? 1 : -1;
      }
    });
    setParentData(sortedData);
    setCopiedData(parentData);
    setSortField(field);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handlePrev = () => {
    if (pageSkip > 0) {
      setPageSkip(pageSkip - pageSize);
    }
  };

  const handleNext = () => {
    if (pageSkip + pageSize < copiedData.length) {
      setPageSkip(pageSkip + pageSize);
    }
  };

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
                <th onClick={() => handleSort("fname")}>
                  Full Name
                  <span className="sort-icons">
                    <AiOutlineArrowUp
                      className={
                        sortField === "fname" && sortOrder === "asc"
                          ? "active"
                          : ""
                      }
                    />
                    <AiOutlineArrowDown
                      className={
                        sortField === "fname" && sortOrder === "desc"
                          ? "active"
                          : ""
                      }
                    />
                  </span>
                </th>
                <th onClick={() => handleSort("email")}>
                  Email{" "}
                  <span className="sort-icons">
                    <AiOutlineArrowUp
                      className={
                        sortField === "email" && sortOrder === "asc"
                          ? "active"
                          : ""
                      }
                    />
                    <AiOutlineArrowDown
                      className={
                        sortField === "email" && sortOrder === "desc"
                          ? "active"
                          : ""
                      }
                    />
                  </span>
                </th>
                <th onClick={() => handleSort("phone")}>
                  Phone{" "}
                  <span className="sort-icons">
                    <AiOutlineArrowUp
                      className={
                        sortField === "phone" && sortOrder === "asc"
                          ? "active"
                          : ""
                      }
                    />
                    <AiOutlineArrowDown
                      className={
                        sortField === "phone" && sortOrder === "desc"
                          ? "active"
                          : ""
                      }
                    />
                  </span>
                </th>
                <th onClick={() => handleSort("city")}>
                  City{" "}
                  <span className="sort-icons">
                    <AiOutlineArrowUp
                      className={
                        sortField === "city" && sortOrder === "asc"
                          ? "active"
                          : ""
                      }
                    />
                    <AiOutlineArrowDown
                      className={
                        sortField === "city" && sortOrder === "desc"
                          ? "active"
                          : ""
                      }
                    />
                  </span>
                </th>
                <th onClick={() => handleSort("gender")}>
                  Gender{" "}
                  <span className="sort-icons">
                    <AiOutlineArrowUp
                      className={
                        sortField === "gender" && sortOrder === "asc"
                          ? "active"
                          : ""
                      }
                    />
                    <AiOutlineArrowDown
                      className={
                        sortField === "gender" && sortOrder === "desc"
                          ? "active"
                          : ""
                      }
                    />
                  </span>
                </th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {copiedData
                .slice(pageSkip, pageSkip + pageSize)
                .map((item, index) => (
                  <tr key={index}>
                    <td>
                      {item.fname} {item.lname}
                    </td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.city}</td>
                    <td>{item.gender === "select" ? "null" : item.gender}</td>
                    <td className="btn-div">
                      <button
                        className="actionsBtn"
                        onClick={() => handleEdit(item, index)}
                      >
                        <BsPencilSquare />
                      </button>
                      <button
                        className="actionsBtn"
                        onClick={() => {
                          handleDelete(index);
                        }}
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
      <div className="pagination">
        <button onClick={handlePrev} disabled={pageSkip === 0}>
          <GrPrevious className="svg" />
        </button>
        <button
          onClick={handleNext}
          disabled={pageSkip + pageSize >= copiedData.length}
        >
          <GrNext className="svg" />
        </button>
      </div>
    </>
  );
};

export default DisplayForm;
