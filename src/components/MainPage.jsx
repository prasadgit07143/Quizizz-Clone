import React from "react";
import MainSection from "./MainSection";
import SideNav from "./SideNav";
import { mainSectionData } from "./DataProvider";
import Footer from "./Footer";

function MainPage() {
  return (
    <React.Fragment>
      <SideNav />
      <MainSection mainSectionData={mainSectionData} />
      <div className="main-footer-wrapper">
        <Footer fontFamily="font-opensans" />
      </div>
    </React.Fragment>
  );
}

export default MainPage;
