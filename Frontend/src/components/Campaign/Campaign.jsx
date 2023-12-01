import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSVLink } from "react-csv";

import CampaignTable from "../CampaignTable/CampaignTable";
import CreateCampaign from "../CreateCampaign/CreateCampaign";

import moment from "moment";

const initialState = {
  user_id: "",
};

const Campaign = () => {
  const searchRef = useRef();
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [dataSearch, setDataSearch] = useState({ search: null });
  const [loading, setLoading] = useState(false);
  const [isOpenPopup, setOpenPopup] = useState(false);
  const [isReload, setReload] = useState(true); // set Callback
  const [data, setData] = useState([initialState]);

  const { err, success } = data;

  useEffect(() => {
    const currentMoment = moment();
    const formatCurrentDate = currentMoment.format("YYYY-MM-DDTHH:mm");

    setStartTime(formatCurrentDate);
    setEndTime(formatCurrentDate);
  }, []);

  function changePopup() {
    setOpenPopup(!isOpenPopup);
    setReload(!isReload);
  }

  function handleSearch() {
    let search = searchRef.current.value;
    setDataSearch({ search: search });
    setReload(!isReload);
  }

  function handleStartTimeChange(event) {
    setStartTime(event.target.value);
  }
  function handleEndTimeChange(event) {
    setEndTime(event.target.value);
  }

  return (
    <div className="campaign">
      {/* {err && showErrMsg(err)}
      {success && showSuccessMsg(success)}
      {loading && <h3>Loading.....</h3>} */}

      <div className="camp-filter-bar">
        <div className="camp-datetime">
          <div className="starttime-container">
            <label htmlFor="startDateTimePicker">Start Time:</label>
            <input
              type="datetime-local"
              id="startDateTimePicker"
              name="startDateTimePicker"
              value={startTime}
              onChange={handleStartTimeChange}
            ></input>
          </div>
          <div className="endtime-container">
            <label htmlFor="endDateTimePicker">End Time:</label>
            <input
              className="endtime"
              type="datetime-local"
              id="endDateTimePicker"
              name="endDateTimePicker"
              value={endTime}
              onChange={handleEndTimeChange}
            ></input>
          </div>
        </div>
        <div className="camp-search-container">
          <input
            type="text"
            id="search-bar"
            onBlur={handleSearch}
            ref={searchRef}
            placeholder="Search"
          />
        </div>
        <div className="camp-func-btn">
          <CSVLink className={"camp-export-btn"} data={data}>
            Export CSV
          </CSVLink>
          <button onClick={changePopup}>Create Campaign</button>
        </div>
      </div>
      {/* {data && <CampaignTable data={data[0].campaign} />}
      {!data && <div className="camp-nodata-text">NO DATA</div>}
      {isOpenPopup && <AccPopup changePopup={changePopup} />} */}
    </div>
  );
};

export default Campaign;