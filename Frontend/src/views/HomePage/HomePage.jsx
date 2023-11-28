import { React, useState } from "react";
import NavBar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import SideBar from "../../components/SideBar/SideBar";
import "./HomePage.scss";
import { OPEN_ACCOUNT, OPEN_DASHBOARD } from "../../containers/menuContainer";
import Account from "../../components/Account/Account";

const HomePage = () => {
  const [openMenu, setOpenMenu] = useState(OPEN_DASHBOARD);
  const [isOpenSideBar, setIsOpenSideBar] = useState(true);

  function openSideBar() {
    return setIsOpenSideBar(!isOpenSideBar);
  }

  function clickSideBar(changeValue) {
    return setOpenMenu(changeValue);
  }

  return (
    <div className="home-page">
      <Banner />
      <NavBar openSideBar={openSideBar} />
      <div className="main-page">
        <SideBar show={isOpenSideBar} clickSideBar={clickSideBar} />
        {openMenu === OPEN_ACCOUNT && <Account />}
      </div>
    </div>
  );
};

export default HomePage;
