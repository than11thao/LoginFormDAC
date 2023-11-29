import React, { useState } from "react";
import "./AccTable.scss";
import useTable from "../../store/useTable";
import Footer from "../Footer/Footer";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import AccPopup from "../AccountPopup/AccPopup";
import AccUpdatePopup from "../AccountPopup/AccUpdatePopup";

const AccTable = (props) => {
  const [selectedRecord, setSelectedRecord] = useState(null);
  const handleEditClick = (record) => {
    setSelectedRecord(record);
  };
  const handleFormClose = () => {
    setSelectedRecord(null);
  };
  const [isOpenPopup, setOpenPopup] = useState(false);

  const changePopup = () => {
    setOpenPopup(!isOpenPopup);
  };

  const rowsPerPage = 10;
  const [page, setPage] = useState(1);
  const { pageData: slice, pages: range } = useTable(
    props.data,
    page,
    rowsPerPage
  );
  console.log(props.data);
  function renderTable() {
    return slice.map((user) => {
      return (
        <tr key={user.user_id}>
          <td>{user.id}</td>
          <td>{`${user.last_name} ${user.first_name}`}</td>
          <td>{user.email}</td>
          <td>{user.address}</td>
          <td>{user.phone}</td>
          <td>{user.role}</td>
          <td>
            <AiFillEdit
              className="edit-btn"
              onClick={() => handleEditClick(user)}
            />
            <AiFillDelete className="del-btn" />
          </td>
        </tr>
      );
    });
  }

  return (
    <div className="acc-table-data">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        {/* {console.log(props)} */}
        <tbody>{props.data && renderTable(props.data)}</tbody>
      </table>
      <Footer range={range} slice={slice} setPage={setPage} page={page} />
      {isOpenPopup && <AccPopup changePopup={changePopup} />}
      {selectedRecord && (
        <AccUpdatePopup record={selectedRecord} onClose={handleFormClose} />
      )}
    </div>
  );
};

export default AccTable;
