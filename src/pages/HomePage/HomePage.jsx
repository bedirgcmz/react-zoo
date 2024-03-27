import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import MainContent from "../../components/MainContent/MainContent";
import { animals } from "../../assets/data/animals";

const HomePage = ({ sidebarListData, setSidebarListData }) => {
  useEffect(() => {
    setSidebarListData(animals);
  }, []);
  return (
    <div>
      <Sidebar sidebarListData={sidebarListData} setSidebarListData={setSidebarListData} />
      <MainContent />
    </div>
  );
};

export default HomePage;
