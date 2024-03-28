import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { animals } from "../../assets/data/animals";
import MainContent from "../../components/MainContent/MainContent";

const GroupPage = ({ sidebarListData, setSidebarListData }) => {
  const { groupName } = useParams();
  const [targetAnimalList, setTargetAnimalList] = useState({});
  console.log(animals);

  useEffect(() => {
    const filteredAnimalList = groupName && animals?.filter((animal) => animal.group === groupName);
    setTargetAnimalList(filteredAnimalList);
    setSidebarListData(filteredAnimalList);
  }, [groupName, animals]);

  return (
    <div>
      <Sidebar sidebarListData={sidebarListData} setSidebarListData={setSidebarListData} />
      <MainContent />
    </div>
  );
};

export default GroupPage;
