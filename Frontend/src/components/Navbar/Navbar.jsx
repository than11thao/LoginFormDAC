import React from "react";
import "./Navbar.scss";
import { TbLayoutSidebarRightExpandFilled } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
const logo = require("../../assest/user.png");

const Navbar = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function toggleClick() {
    props.openSideBar();
  }
  function logOut() {
    dispatch(logout());
    navigate("/");
  }
  return (
    <ul className="nav-bar">
      <div className="btn-sidebar" onClick={toggleClick}>
        <TbLayoutSidebarRightExpandFilled className="btn-sidebar-icon" />
        <div className="name-btn">Toggle sidebar</div>
      </div>
      <p>LOGO</p>
      <img alt="logo" className="logo" onClick={logOut} src={logo} />
    </ul>
  );
};

export default Navbar;
