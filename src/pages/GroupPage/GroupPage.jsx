import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { animals } from "../../assets/data/animals";
import MainContent from "../../components/MainContent/MainContent";
import styles from "./GroupPage.module.css";

const GroupPage = ({
  sidebarListData,
  setSidebarListData,
  mainContents,
  setMainContents,
  mainMessage,
}) => {
  const { groupName } = useParams();
  const [targetAnimalList, setTargetAnimalList] = useState({});

  useEffect(() => {
    const filteredAnimalList = groupName && animals?.filter((animal) => animal.group === groupName);
    setTargetAnimalList(filteredAnimalList);
    setSidebarListData(filteredAnimalList);
    setMainContents(mainMessage);
  }, [groupName, animals]);

  return (
    <>
      <h1 className={styles.groupPageTitle}>
        Weolcome to {groupName.charAt(0).toUpperCase() + groupName.slice(1)} Page
      </h1>
      <div className={styles.groupPageContainer}>
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
          groupName={groupName}
        />
      </div>
    </>
  );
};

export default GroupPage;
