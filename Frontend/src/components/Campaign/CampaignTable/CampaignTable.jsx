import React, { useState } from "react";

import "./CampaignTable.scss";

import useTable from "../../../store/useTable";
import Footer from "../../Footer/Footer";

import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import CreateCampaign from "../CreateCampaign/CreateCampaign";
import EditCampaign from "../CreateCampaign/EditCampaign";

const CampaignTable = (props) => {
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [isOpenPopup, setOpenPopup] = useState(false);
  const [page, setPage] = useState(1);

  const handleEditClick = (record) => {
    setSelectedRecord(record);
  };

  const handleFormClose = () => {
    setSelectedRecord(null);
  };

  const changePopup = () => {
    setOpenPopup(!isOpenPopup);
  };

  const rowsPerPage = 5;

  const { pageData: slice, pages: range } = useTable(
    props.data || [],
    page,
    rowsPerPage
  );

  function renderTable() {
    return slice.map((campaign) => {
      return (
        <tr key={campaign.campaign_id}>
          <td>{campaign.name}</td>
          <td>
            {/* {
              <td>
                {campaign.status === 1 ? (
                  <FontAwesomeIcon
                    icon="fa-duotone fa-circle"
                    style={{
                      "--fa-primary-color": "#03c200",
                      "--fa-secondary-color": "#03c200",
                    }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon="fa-duotone fa-circle"
                    style={{
                      "--fa-primary-color": "#f00000",
                      "--fa-secondary-color": "#e60000",
                    }}
                  />
                )}
                {
                  <FontAwesomeIcon
                    icon="fa-duotone fa-circle"
                    style={{
                      "--fa-primary-color": "#03c200",
                      "--fa-secondary-color": "#03c200",
                    }}
                  />
                }
              </td>
            } */}
          </td>
          <td>{campaign.email}</td>
          <td>{campaign.address}</td>
          <td>{campaign.phone}</td>
          <td>{campaign.role_id}</td>
          <td>{campaign.action}</td>
          <td>
            <AiFillEdit
              className="edit-btn"
              onClick={() => handleEditClick(campaign)}
            />
            <AiFillDelete className="del-btn" />
          </td>
        </tr>
      );
    });
  }

  return (
    <div className="camp-table-data">
      <table>
        <thead>
          <tr>
            <th>Campaign Name</th>
            <th>Status</th>
            <th>Used Amount</th>
            <th>Usage Rate</th>
            <th>Budget</th>
            <th>Start date</th>
            <th>End date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
      <Footer range={range} slice={slice} setPage={setPage} page={page} />
      {isOpenPopup && <CreateCampaign changePopup={changePopup} />}
      {selectedRecord && (
        <EditCampaign record={selectedRecord} onClose={handleFormClose} />
      )}
    </div>
  );
};

export default CampaignTable;
