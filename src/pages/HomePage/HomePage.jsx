import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import MainContent from "../../components/MainContent/MainContent";
import { animals } from "../../assets/data/animals";
import styles from "./HomePage.module.css";

const HomePage = ({
  sidebarListData,
  setSidebarListData,
  mainContents,
  setMainContents,
  mainMessage,
}) => {
  setSidebarListData(animals);
  useEffect(() => {
    setMainContents(mainMessage);
  }, [setSidebarListData]);
  return (
    <>
      <h1 className={styles.homePageTitle}>Weolcome to Our Zoo</h1>
      <div className={styles.homePageContainer}>
        <Sidebar
          sidebarListData={sidebarListData}
          setSidebarListData={setSidebarListData}
          mainContents={mainContents}
          setMainContents={setMainContents}
          mainMessage={mainMessage}
        />
        <MainContent
          mainContents={mainContents}
          setMainContents={setMainContents}
          mainMessage={mainMessage}
        />
      </div>
    </>
  );
};

export default HomePage;
