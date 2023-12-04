import "./SideBar.scss";
import {
  OPEN_ACCOUNT,
  OPEN_CAMPAIGN,
  OPEN_DASHBOARD,
} from "../../containers/menuContainer";
import React from "react";
import { TbCategory } from "react-icons/tb";
const logo = require("../../assest/user.png");

const SideBar = (props) => {
  const { activeItem } = props;

  function clickChange(value) {
    props.clickSideBar(value);
  }

  return (
    <div
      className={`${"side-bar"} 
            ${props.show ? "" : "hidden"}`}
    >
      <div className="user-info">
        <div className="logo-user">
          <img alt="#" src={logo} />
        </div>
        <div className={"name-user"}>
          <p>User name</p>
        </div>
      </div>
      <div
        className={
          activeItem === OPEN_DASHBOARD ? "highlight-item-side" : "item-side"
        }
        onClick={() => clickChange(OPEN_DASHBOARD)}
      >
        <TbCategory className="icon-side-bar" />
        Dashboard
      </div>
      <div
        className={
          activeItem === OPEN_CAMPAIGN ? "highlight-item-side" : "item-side"
        }
        onClick={() => clickChange(OPEN_CAMPAIGN)}
      >
        <TbCategory className="icon-side-bar" />
        Campaign
      </div>
      <div
        className={
          activeItem === OPEN_ACCOUNT ? "highlight-item-side" : "item-side"
        }
        onClick={() => clickChange(OPEN_ACCOUNT)}
      >
        <TbCategory className="icon-side-bar" />
        Account
      </div>
    </div>
  );
};

export default SideBar;
