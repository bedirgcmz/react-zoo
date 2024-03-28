import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import MainContent from "../../components/MainContent/MainContent";
import { animals } from "../../assets/data/animals";
import styles from "./HomePage.module.css";

const HomePage = ({ sidebarListData, setSidebarListData }) => {
  setSidebarListData(animals);
  useEffect(() => {}, [setSidebarListData]);
  return (
    <>
      <h1 className={styles.homePageTitle}>Weolcome to Our Zoo</h1>
      <div className={styles.homePageContainer}>
        <Sidebar sidebarListData={sidebarListData} setSidebarListData={setSidebarListData} />
        <MainContent />
      </div>
    </>
  );
};

export default HomePage;
